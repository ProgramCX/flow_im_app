import { app, BrowserWindow, ipcMain } from "electron";
import { fileURLToPath } from "node:url";
import setupIpcHandlers from "./ipc";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.APP_ROOT = path.join(__dirname, "..");
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let wins: Array<BrowserWindow> = [];

// 创建新窗口
function createNewWindow(
  route: string,
  width: number,
  height: number,
  frame: boolean = true,
  hideMenuBar: boolean = true,
  resizable: boolean = true,
  movable: boolean = true,
  minimizable: boolean = true,
  maximizable: boolean = true,
  fullScreen: boolean = false,
  alwaysOnTop: boolean = false,
  inTaskbar: boolean = true,
  opacity: number = 1
) {
  const newWin = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "icons/icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      webSecurity: false,
    },
    frame: frame,
    width: width,
    height: height,
    show: false,
    autoHideMenuBar: hideMenuBar,
    resizable: resizable,
    movable: movable,
    minimizable: minimizable,
    maximizable: maximizable,
    fullscreen: fullScreen,
    alwaysOnTop: alwaysOnTop,
    skipTaskbar: !inTaskbar,
    opacity: opacity,
  });

  const finalRoute = route.startsWith("/") ? route : "/" + route;

  // 加载URL或者本地HTML
  if (VITE_DEV_SERVER_URL) {
    const fullUrl = `${VITE_DEV_SERVER_URL}#${finalRoute}`;
    newWin.loadURL(fullUrl);
    newWin.webContents.openDevTools();
  } else {
    const indexPath = path.join(RENDERER_DIST, "index.html");
    newWin.loadFile(indexPath, { hash: finalRoute });
  }

  // 窗口加载完成后显示并发送消息
  newWin.webContents.on("did-finish-load", () => {
    if (!newWin.isDestroyed()) {
      newWin.show();
      newWin.webContents.send(
        "main-process-message",
        new Date().toLocaleString()
      );
    }
  });

  // 窗口关闭时处理
  newWin.on("closed", () => {
    const index = wins.indexOf(newWin);
    if (index !== -1) {
      wins.splice(index, 1);
    }
    newWin.removeAllListeners();
  });

  setupIpcHandlers(newWin); // 设置IPC处理

  wins.push(newWin);
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    wins.forEach((win) => {
      win.destroy();
    });
    wins = [];
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createNewWindow("/", 300, 500, true);
  }
});

// 应用程序准备好后创建初始窗口
app.whenReady().then(() => {
  createNewWindow(
    "/",
    300,
    500,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    1
  );
});

ipcMain.on("create-new-window", (
  _event,
  route: string,
  width: number,
  height: number,
  frame: boolean = true,
  hideMenuBar: boolean = true,
  resizable: boolean = true,
  movable: boolean = true,
  minimizable: boolean = true,
  maximizable: boolean = true,
  fullScreen: boolean = false,
  alwaysOnTop: boolean = false,
  inTaskbar: boolean = true,
  opacity: number = 1
) => {
  createNewWindow(
    route,
    width,
    height,
    frame,
    hideMenuBar,
    resizable,
    movable,
    minimizable,
    maximizable,
    fullScreen,
    alwaysOnTop,
    inTaskbar,
    opacity
  );
});
