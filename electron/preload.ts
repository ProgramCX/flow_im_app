import { ipcRenderer, contextBridge } from 'electron';

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('electron', {

  createNewWindow: (route: string, width: number, height: number, frame: boolean) => {
    ipcRenderer.send('create-new-window', route, width, height, frame);
  },

  // Resize the window
  resizeWindow: (width: number, height: number) => ipcRenderer.send('resize-window', width, height),
  
  // Control window frame visibility
  setWindowFrameVisible: (visible: boolean) => ipcRenderer.send('set-window-frame-visible', visible),

  // Set window title
  setWindowTitle: (title: string) => ipcRenderer.send('set-window-title', title),

  // 设置窗口居中
  setWindowCentral: () => ipcRenderer.send('set-window-central'),

  // 设置窗口是否置顶
  setWindowAlwaysOnTop: (alwaysOnTop: boolean) => ipcRenderer.send('set-window-always-on-top', alwaysOnTop),

  // 设置窗口是否可见
  setWindowVisible: (visible: boolean) => ipcRenderer.send('set-window-visible', visible),

  // 设置窗口菜单栏是否可见
  setWindowMenuBarVisible: (visible: boolean) => ipcRenderer.send('set-window-menu-bar-visible', visible),

  // 设置窗口是否可改变大小
  setWindowResizable: (resizable: boolean) => ipcRenderer.send('set-window-resizable', resizable),

  // 设置窗口是否可移动
  setWindowMovable: (movable: boolean) => ipcRenderer.send('set-window-movable', movable),

  // 设置窗口是否可最小化
  setWindowMinimizable: (minimizable: boolean) => ipcRenderer.send('set-window-minimizable', minimizable),

  // 设置窗口是否可最大化
  setWindowMaximizable: (maximizable: boolean) => ipcRenderer.send('set-window-maximizable', maximizable),

  // 设置窗口是否全屏
  setWindowFullScreen: (fullScreen: boolean) => ipcRenderer.send('set-window-full-screen', fullScreen),

  // 设置窗口背景颜色
  setWindowBackgroundColor: (color: string) => ipcRenderer.send('set-window-background-color', color),

  // 设置窗口图标
  setWindowIcon: (iconPath: string) => ipcRenderer.send('set-window-icon', iconPath),

  // 设置窗口是否在所有工作区可见
  setWindowVisibleOnAllWorkspaces: (visible: boolean) => ipcRenderer.send('set-window-visible-on-all-workspaces', visible),

  // 设置窗口大小
  setWindowSize: (width: number, height: number) => ipcRenderer.send('set-window-size', width, height),

  // 设置窗口位置
  setWindowPosition: (x: number, y: number) => ipcRenderer.send('set-window-position', x, y),

  // 设置窗口透明度
  setWindowOpacity: (opacity: number) => ipcRenderer.send('set-window-opacity', opacity),

  // 设置窗口是否在任务栏中显示
  setWindowInTaskbar: (inTaskbar: boolean) => ipcRenderer.send('set-window-in-taskbar', inTaskbar),

  // 窗口操作
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  maximizeWindow: () => ipcRenderer.send('maximize-window'),
  restoreWindow: () => ipcRenderer.send('restore-window'),
  closeWindow: () => ipcRenderer.send('close-window'),
  destroyWindow: () => ipcRenderer.send('destroy-window'),

  // 获取窗口属性
  getWindowPosition: () => ipcRenderer.invoke('get-window-position'),
  getWindowSize: () => ipcRenderer.invoke('get-window-size'),
  getWindowTitle: () => ipcRenderer.invoke('get-window-title'),
  getWindowBackgroundColor: () => ipcRenderer.invoke('get-window-background-color'),
  getWindowOpacity: () => ipcRenderer.invoke('get-window-opacity'),
  isWindowVisible: () => ipcRenderer.invoke('is-window-visible'),
  isWindowMaximized: () => ipcRenderer.invoke('is-window-maximized'),
  isWindowMinimized: () => ipcRenderer.invoke('is-window-minimized'),
  isWindowFullScreen: () => ipcRenderer.invoke('is-window-full-screen'),
  isWindowResizable: () => ipcRenderer.invoke('is-window-resizable'),
  isWindowVisibleOnAllWorkspaces: () => ipcRenderer.invoke('is-window-visible-on-all-workspaces'),
  isWindowAlwaysOnTop: () => ipcRenderer.invoke('is-window-always-on-top'),
  isWindowMovable: () => ipcRenderer.invoke('is-window-movable'),
  isWindowMinimizable: () => ipcRenderer.invoke('is-window-minimizable'),
  isWindowMaximizable: () => ipcRenderer.invoke('is-window-maximizable'),
  isWindowClosable: () => ipcRenderer.invoke('is-window-closable'),
  isWindowMenuBarVisible: () => ipcRenderer.invoke('is-window-menu-bar-visible'),

  // Other IPC APIs
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args));
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },
});
