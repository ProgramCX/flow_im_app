import { app, BrowserWindow, ipcMain } from "electron";
import { fileURLToPath } from "node:url";
import setupIpcHandlers from "./ipc";

import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, "..");

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let wins: Array<BrowserWindow> = []; // Store all windows

/**
 *
 * @param route 需要加载的URL路径
 * @param width 设置窗口宽度
 * @param height 设置窗口高度
 * @param frame 是否显示窗口边框
 */
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

  //加载html文件
  if (VITE_DEV_SERVER_URL) {
    const fullUrl = `${VITE_DEV_SERVER_URL}#${finalRoute}`;
    newWin.loadURL(fullUrl);
    newWin.webContents.openDevTools();
  } else {
    const indexPath = path.join(RENDERER_DIST, "index.html");
    newWin.loadFile(indexPath, { hash: finalRoute });
  }

  // 等待加载完后再展示窗口
  newWin.webContents.on("did-finish-load", () => {
    newWin.show();
    newWin.webContents.send(
      "main-process-message",
      new Date().toLocaleString()
    );
  });

  newWin.on("closed", () => {
    const index = wins.indexOf(newWin);
    //将销毁的窗口从数组中删除
    if (index !== -1) wins.splice(index, 1);
  });

  //设置IPC通信
  setupIpcHandlers(newWin);

  wins.push(newWin);
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    wins.forEach((win) => {
      win.destroy();
      win = null;
    });
    wins = [];
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createNewWindow("/", 300, 500, true);
  }
});

//打开应用程序时创建初始窗口
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

ipcMain.on(
  "create-new-window",
  (
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
  }
);
