import { BrowserWindow, ipcMain } from "electron";

export default function setupWindowIpcHandlers(win: BrowserWindow | null) {

    //改变窗口大小
  ipcMain.on("resize-window", (_event, width: number, height: number) => {
    if (win) {
      win.setSize(width, height);
    }
  });

  //设置窗口边框是否可见
  ipcMain.on("set-window-frame-visible", (_event, isFrameVisible: boolean) => {
    if (win) {
      win.setMenuBarVisibility(isFrameVisible);
      win.setResizable(isFrameVisible);
    }
  });

  //设置窗口标题
  ipcMain.on("set-window-title", (_event, title: string) => {
    if (win) {
      win.setTitle(title);
    }
  });

  //设置窗口图标
  ipcMain.on("set-window-central", (_event) => {
    if (win) {
      const { width, height } = win.getBounds();
      const { workAreaSize } = require("electron").screen.getPrimaryDisplay();
      const x = (workAreaSize.width - width) / 2;
      const y = (workAreaSize.height - height) / 2;
      win.setBounds({ x, y });
    }
  });

  //设置窗口是是否置顶
  ipcMain.on("set-window-always-on-top", (_event, alwaysOnTop: boolean) => {
    if (win) {
      win.setAlwaysOnTop(alwaysOnTop);
    }
  });

  //设置窗口是否可见
  ipcMain.on("set-window-visible", (_event, visible: boolean) => {
    if (win) {
      visible ? win.show() : win.hide();
    }
  });

  //设置窗口菜单栏是否可见
  ipcMain.on("set-window-menu-bar-visible", (_event, visible: boolean) => {
    if (win) {
      win.setMenuBarVisibility(visible);
    }
  });

  //设置窗口是否可改变大小
  ipcMain.on("set-window-resizable", (_event, resizable: boolean) => {
    if (win) {
      win.setResizable(resizable);
    }
  });

  //设置窗口是否可移动
  ipcMain.on("set-window-movable", (_event, movable: boolean) => {
    if (win) {
      win.setMovable(movable);
    }
  });

  //设置窗口最小化
  ipcMain.on("set-window-minimizable", (_event, minimizable: boolean) => {
    if (win) {
      win.setMinimizable(minimizable);
    }
  });

  //设置窗口最大化
  ipcMain.on("set-window-maximizable", (_event, maximizable: boolean) => {
    if (win) {
      win.setMaximizable(maximizable);
    }
  });

  //设置窗口是否全屏
  ipcMain.on("set-window-full-screen", (_event, fullScreen: boolean) => {
    if (win) {
      win.setFullScreen(fullScreen);
    }
  });

  //设置窗口背景颜色
  ipcMain.on("set-window-background-color", (_event, color: string) => {
    if (win) {
      win.setBackgroundColor(color);
    }
  });


  //设置窗口图标
  ipcMain.on("set-window-icon", (_event, iconPath: string) => {
    if (win) {
      win.setIcon(iconPath);
    }
  });

  //设置窗口是否在所有工作区可见
  ipcMain.on("set-window-visible-on-all-workspaces", (_event, visible: boolean) => {
    if (win) {
      win.setVisibleOnAllWorkspaces(visible);
    }
  });


  //设置窗口大小
  ipcMain.on("set-window-size", (_event, width: number, height: number) => {
    if (win) {
      win.setSize(width, height);
    }
  });

  //设置窗口位置
  ipcMain.on("set-window-position", (_event, x: number, y: number) => {
    if (win) {
      win.setPosition(x, y);
    }
  });

  //设置窗口透明度
  ipcMain.on("set-window-opacity", (_event, opacity: number) => {
    if (win) {
      win.setOpacity(opacity);
    }
  });

  //设置窗口是否在任务栏中显示
  ipcMain.on("set-window-in-taskbar", (_event, inTaskbar: boolean) => {
    if (win) {
      win.setSkipTaskbar(!inTaskbar);
    }
  });

    //设置窗口最小化
  ipcMain.on("minimize-window", () => {
    if (win) {
      win.minimize();
    }
  });

  //设置窗口最大化
  ipcMain.on("maximize-window", () => {
    if (win) {
      win.maximize();
    }
  });

  //设置窗口还原
  ipcMain.on("restore-window", () => {
    if (win) {
      win.restore();
    }
  });

  //关闭窗口
  ipcMain.on("close-window", () => {
    if (win) {
      win.close();
    }
  });

  //销毁窗口
  ipcMain.on("destroy-window", () => {
    if (win) {
      win.destroy();
    }
  });

  //获取窗口位置
  ipcMain.on("get-window-position", (_event) => {
    if (win) {
      const [x, y] = win.getPosition();
      _event.reply("get-window-position-reply", { x, y });
    }
  });

  //获取窗口大小
  ipcMain.on("get-window-size", (_event) => {
    if (win) {
      const [width, height] = win.getSize();
      _event.reply("get-window-size-reply", { width, height });
    }
  });

  //获取窗口标题
  ipcMain.on("get-window-title", (_event) => {
    if (win) {
      const title = win.getTitle();
      _event.reply("get-window-title-reply", title);
    }
  });

  //获取窗口背景色
  ipcMain.on("get-window-background-color", (_event) => {
    if (win) {
      const color = win.getBackgroundColor();
      _event.reply("get-window-background-color-reply", color);
    }
  });

  //获取窗口透明度
  ipcMain.on("get-window-opacity", (_event) => {
    if (win) {
      const opacity = win.getOpacity();
      _event.reply("get-window-opacity-reply", opacity);
    }
  });

    //获取窗口是否可见
  ipcMain.on("is-window-visible", (_event) => {
    if (win) {
      const visible = win.isVisible();
      _event.reply("is-window-visible-reply", visible);
    }
  });

    //获取窗口是否最大化
  ipcMain.on("is-window-maximized", (_event) => {
    if (win) {
      const maximized = win.isMaximized();
      _event.reply("is-window-maximized-reply", maximized);
    }
  });

  //获取窗口是否最小化
  ipcMain.on("is-window-minimized", (_event) => {
    if (win) {
      const minimized = win.isMinimized();
      _event.reply("is-window-minimized-reply", minimized);
    }
  });


  //获取窗口是否全屏
  ipcMain.on("is-window-full-screen", (_event) => {
    if (win) {
      const fullScreen = win.isFullScreen();
      _event.reply("is-window-full-screen-reply", fullScreen);
    }
  });


  //获取窗口是否可以改变大小
  ipcMain.on("is-window-resizable", (_event) => {
    if (win) {
      const resizable = win.isResizable();
      _event.reply("is-window-resizable-reply", resizable);
    }
  });

  //获取窗口是否在所有工作区可见
  ipcMain.on("is-window-visible-on-all-workspaces", (_event) => {
    if (win) {
      const visibleOnAllWorkspaces = win.isVisibleOnAllWorkspaces();
      _event.reply("is-window-visible-on-all-workspaces-reply", visibleOnAllWorkspaces);
    }
  });


  //获取窗口是否置顶
  ipcMain.on("is-window-always-on-top", (_event) => {
    if (win) {
      const alwaysOnTop = win.isAlwaysOnTop();
      _event.reply("is-window-always-on-top-reply", alwaysOnTop);
    }
  });

  //获取窗口是否可移动
  ipcMain.on("is-window-movable", (_event) => {
    if (win) {
      const movable = win.isMovable();
      _event.reply("is-window-movable-reply", movable);
    }
  });


    //获取窗口是否可最小化
  ipcMain.on("is-window-minimizable", (_event) => {
    if (win) {
      const minimizable = win.isMinimizable();
      _event.reply("is-window-minimizable-reply", minimizable);
    }
  });

  //获取窗口是否可最大化
  ipcMain.on("is-window-maximizable", (_event) => {
    if (win) {
      const maximizable = win.isMaximizable();
      _event.reply("is-window-maximizable-reply", maximizable);
    }
  });

  //获取窗口是否可关闭
  ipcMain.on("is-window-closable", (_event) => {
    if (win) {
      const closable = win.isClosable();
      _event.reply("is-window-closable-reply", closable);
    }
  });

  //获取窗口是否在任务栏中显示
  ipcMain.on("is-window-menu-bar-visible", (_event) => {
    if (win) {
      const menuBarVisible = win.isMenuBarVisible();
      _event.reply("is-window-menu-bar-visible-reply", menuBarVisible);
    }
  });
}
