import { BrowserWindow } from "electron";

export default function setupWindowIpcHandlers(win: BrowserWindow | null) {

  // 判断窗口是否有效，返回 true 表示窗口可用
  const checkWindow = () => {
    return win && !win.isDestroyed();
  };

  // ----------------- Set 系列操作（使用 win.webContents 绑定） -----------------

  if (checkWindow()) {
    win.webContents.on("ipc-message", (_event, channel, ...args) => {
      // 根据 channel 处理 set 操作
      switch (channel) {
        // 改变窗口大小
        case "resize-window": {
          const [width, height] = args as number[];
          win.setSize(width, height);
          break;
        }
        // 设置窗口边框是否可见
        case "set-window-frame-visible": {
          const [isFrameVisible] = args as [boolean];
          win.setMenuBarVisibility(isFrameVisible);
          win.setResizable(isFrameVisible);
          break;
        }
        // 设置窗口标题
        case "set-window-title": {
          const [title] = args as [string];
          win.setTitle(title);
          break;
        }
        // 设置窗口图标（居中窗口）
        case "set-window-central": {
          const { width, height } = win.getBounds();
          const { workAreaSize } = require("electron").screen.getPrimaryDisplay();
          const x = (workAreaSize.width - width) / 2;
          const y = (workAreaSize.height - height) / 2;
          win.setBounds({ x, y });
          break;
        }
        // 设置窗口是否置顶
        case "set-window-always-on-top": {
          const [alwaysOnTop] = args as [boolean];
          win.setAlwaysOnTop(alwaysOnTop);
          break;
        }
        // 设置窗口是否可见
        case "set-window-visible": {
          const [visible] = args as [boolean];
          visible ? win.show() : win.hide();
          break;
        }
        // 设置窗口菜单栏是否可见
        case "set-window-menu-bar-visible": {
          const [visible] = args as [boolean];
          win.setMenuBarVisibility(visible);
          break;
        }
        // 设置窗口是否可改变大小
        case "set-window-resizable": {
          const [resizable] = args as [boolean];
          win.setResizable(resizable);
          break;
        }
        // 设置窗口是否可移动
        case "set-window-movable": {
          const [movable] = args as [boolean];
          win.setMovable(movable);
          break;
        }
        // 设置窗口最小化
        case "set-window-minimizable": {
          const [minimizable] = args as [boolean];
          win.setMinimizable(minimizable);
          break;
        }
        // 设置窗口最大化
        case "set-window-maximizable": {
          const [maximizable] = args as [boolean];
          win.setMaximizable(maximizable);
          break;
        }
        // 设置窗口是否全屏
        case "set-window-full-screen": {
          const [fullScreen] = args as [boolean];
          win.setFullScreen(fullScreen);
          break;
        }
        // 设置窗口背景颜色
        case "set-window-background-color": {
          const [color] = args as [string];
          win.setBackgroundColor(color);
          break;
        }
        // 设置窗口图标
        case "set-window-icon": {
          const [iconPath] = args as [string];
          win.setIcon(iconPath);
          break;
        }
        // 设置窗口是否在所有工作区可见
        case "set-window-visible-on-all-workspaces": {
          const [visible] = args as [boolean];
          win.setVisibleOnAllWorkspaces(visible);
          break;
        }
        // 设置窗口大小
        case "set-window-size": {
          const [width, height] = args as number[];
          win.setSize(width, height);
          break;
        }
        // 设置窗口位置
        case "set-window-position": {
          const [x, y] = args as number[];
          win.setPosition(x, y);
          break;
        }
        // 设置窗口透明度
        case "set-window-opacity": {
          const [opacity] = args as [number];
          win.setOpacity(opacity);
          break;
        }
        // 设置窗口是否在任务栏中显示
        case "set-window-in-taskbar": {
          const [inTaskbar] = args as [boolean];
          win.setSkipTaskbar(!inTaskbar);
          break;
        }
        // 设置窗口最小化
        case "minimize-window": {
          win.minimize();
          break;
        }
        // 设置窗口最大化
        case "maximize-window": {
          win.maximize();
          break;
        }
        // 设置窗口还原
        case "restore-window": {
          win.restore();
          break;
        }
        // 设置窗口最小大小
        case "set-window-min-size": {
          const [minWidth, minHeight] = args as number[];
          win.setMinimumSize(minWidth, minHeight);
          break;
        }
        // 关闭窗口（只触发一次）
        case "close-window": {
          win.close();
          break;
        }
        // 销毁窗口
        case "destroy-window": {
          win.destroy();
          break;
        }
        default: {
          console.warn("Unknown set-window ipc-message channel:", channel);
        }
      }
    });
  }
}
//   // ----------------- Get 系列操作（使用全局 ipcMain） -----------------

//   // 获取窗口位置
//   ipcMain.on("get-window-position", (_event) => {
//     if (checkWindow()) {
//       const [x, y] = win.getPosition();
//       return { x, y };
//     }
//   });

//   // 获取窗口大小
//   ipcMain.on("get-window-size", (_event) => {
//     if (checkWindow()) {
//       const [width, height] = win.getSize();
//       return { width, height };
//     }
//   });

//   // 获取窗口标题
//   ipcMain.on("get-window-title", (_event) => {
//     if (checkWindow()) {
//       const title = win.getTitle();
//       return title;
//     }
//   });

//   // 获取窗口背景色
//   ipcMain.on("get-window-background-color", (_event) => {
//     if (checkWindow()) {
//       const color = win.getBackgroundColor();
//       return color;
//     }
//   });

//   // 获取窗口透明度
//   ipcMain.on("get-window-opacity", (_event) => {
//     if (checkWindow()) {
//       const opacity = win.getOpacity();
//       return opacity;
//     }
//   });

//   // 获取窗口是否可见
//   ipcMain.on("is-window-visible", (_event) => {
//     if (checkWindow()) {
//       const visible = win.isVisible();
//      return visible;
//     }
//   });

//   // 获取窗口是否最大化
//   ipcMain.on("is-window-maximized", (_event) => {
//     if (checkWindow()) {
//       const maximized = win.isMaximized();
//       return maximized;
//     }
//   });

//   // 获取窗口是否最小化
//   ipcMain.on("is-window-minimized", (_event) => {
//     if (checkWindow()) {
//       const minimized = win.isMinimized();
//       return  minimized;
//     }
//   });

//   // 获取窗口是否全屏
//   ipcMain.on("is-window-full-screen", (_event) => {
//     if (checkWindow()) {
//       const fullScreen = win.isFullScreen();
//       return fullScreen;
//     }
//   });

//   // 获取窗口是否可以改变大小
//   ipcMain.on("is-window-resizable", (_event) => {
//     if (checkWindow()) {
//       const resizable = win.isResizable();
//       return resizable;
//     }
//   });

//   // 获取窗口是否在所有工作区可见
//   ipcMain.on("is-window-visible-on-all-workspaces", (_event) => {
//     if (checkWindow()) {
//       const visibleOnAllWorkspaces = win.isVisibleOnAllWorkspaces();
//       return visibleOnAllWorkspaces;
//     }
//   });

//   // 获取窗口是否置顶
//   ipcMain.on("is-window-always-on-top", (_event) => {
//     if (checkWindow()) {
//       const alwaysOnTop = win.isAlwaysOnTop();
//       return alwaysOnTop;
//     }
//   });

//   // 获取窗口是否可移动
//   ipcMain.on("is-window-movable", (_event) => {
//     if (checkWindow()) {
//       const movable = win.isMovable();
//       return movable;
//     }
//   });

//   // 获取窗口是否可最小化
//   ipcMain.on("is-window-minimizable", (_event) => {
//     if (checkWindow()) {
//       const minimizable = win.isMinimizable();
//       return minimizable;
//     }
//   });

//   // 获取窗口是否可最大化
//   ipcMain.on("is-window-maximizable", (_event) => {
//     if (checkWindow()) {
//       const maximizable = win.isMaximizable();
//       return maximizable;
//     }
//   });

//   // 获取窗口是否可关闭
//   ipcMain.on("is-window-closable", (_event) => {
//     if (checkWindow()) {
//       const closable = win.isClosable();
//       return closable;
//     }
//   });

//   // 获取窗口是否在任务栏中显示
//   ipcMain.on("is-window-menu-bar-visible", (_event) => {
//     if (checkWindow()) {
//       const menuBarVisible = win.isMenuBarVisible();
//       return menuBarVisible;
//     }
//   });
// }
