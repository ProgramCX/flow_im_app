export default class Window {
    /**
     * 
     * @param route 需要加载的URL路径
     * @param width 窗口宽度
     * @param height 窗口高度
     * @param frame 是否显示窗口边框
     * @param hideMenuBar 是否隐藏菜单栏
     * @param resizable 是否可改变大小
     * @param movable 是否可移动
     * @param minimizable 是否可最小化
     * @param maximizable 是否可最大化
     * @param fullScreen 是否全屏
     * @param alwaysOnTop 是否总在最上层
     * @param inTaskbar 是否在任务栏中显示
     * @param opacity 是否透明
     */
  static createNewWindow(
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
    window.electron.createNewWindow(
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

  static setWindowFrameVisible(visible: boolean) {
    window.electron.setWindowFrameVisible(visible);
  }

  static setWindowTitle(title: string) {
    window.electron.setWindowTitle(title);
  }

  static setWindowSize(width: number, height: number) {
    window.electron.resizeWindow(width, height);
  }

  static setWindowCentral() {
    window.electron.setWindowCentral();
  }

  static setWindowAlwaysOnTop(alwaysOnTop: boolean) {
    window.electron.setWindowAlwaysOnTop(alwaysOnTop);
  }

  static setWindowVisible(visible: boolean) {
    window.electron.setWindowVisible(visible);
  }

  static setWindowMenuBarVisible(visible: boolean) {
    window.electron.setWindowMenuBarVisible(visible);
  }

  static setWindowResizable(resizable: boolean) {
    window.electron.setWindowResizable(resizable);
  }

  static setWindowMovable(movable: boolean) {
    window.electron.setWindowMovable(movable);
  }

  static setWindowMinimizable(minimizable: boolean) {
    window.electron.setWindowMinimizable(minimizable);
  }

  static setWindowMaximizable(maximizable: boolean) {
    window.electron.setWindowMaximizable(maximizable);
  }

  static setWindowFullScreen(fullScreen: boolean) {
    window.electron.setWindowFullScreen(fullScreen);
  }

  static setWindowBackgroundColor(color: string) {
    window.electron.setWindowBackgroundColor(color);
  }

  static setWindowIcon(iconPath: string) {
    window.electron.setWindowIcon(iconPath);
  }

  static setWindowVisibleOnAllWorkspaces(visible: boolean) {
    window.electron.setWindowVisibleOnAllWorkspaces(visible);
  }

  static setWindowPosition(x: number, y: number) {
    window.electron.setWindowPosition(x, y);
  }

  static setWindowOpacity(opacity: number) {
    window.electron.setWindowOpacity(opacity);
  }

  static setWindowInTaskbar(inTaskbar: boolean) {
    window.electron.setWindowInTaskbar(inTaskbar);
  }

  static minimizeWindow() {
    window.electron.minimizeWindow();
  }

  static maximizeWindow() {
    window.electron.maximizeWindow();
  }

  static restoreWindow() {
    window.electron.restoreWindow();
  }

  static closeWindow() {
    window.electron.closeWindow();
  }

  static destroyWindow() {
    window.electron.destroyWindow();
  }

  static async getWindowPosition() {
    return await window.electron.getWindowPosition().then((position) => {
      return position;
    });
  }

  static async getWindowSize() {
    return await window.electron.getWindowSize().then((size) => {
      return size;
    });
  }

  static async getWindowTitle() {
    return await window.electron.getWindowTitle().then((title) => {
      return title;
    });
  }

  static async getWindowBackgroundColor() {
    return await window.electron.getWindowBackgroundColor().then((color) => {
      return color;
    });
  }

  static async getWindowOpacity() {
    return await window.electron.getWindowOpacity().then((opacity) => {
      return opacity;
    });
  }

  static async isWindowVisible() {
    return await window.electron.isWindowVisible().then((visible) => {
      return visible;
    });
  }

  static async isWindowMaximized() {
    return await window.electron.isWindowMaximized().then((maximized) => {
      return maximized;
    });
  }

  static async isWindowMinimized() {
    return await window.electron.isWindowMinimized().then((minimized) => {
      return minimized;
    });
  }

  static async isWindowFullScreen() {
    return await window.electron.isWindowFullScreen().then((fullScreen) => {
      return fullScreen;
    });
  }

  static async isWindowResizable() {
    return await window.electron.isWindowResizable().then((resizable) => {
      return resizable;
    });
  }

  static async isWindowVisibleOnAllWorkspaces() {
    return await window.electron
      .isWindowVisibleOnAllWorkspaces()
      .then((visible) => {
        return visible;
      });
  }

  static async isWindowAlwaysOnTop() {
    return await window.electron.isWindowAlwaysOnTop().then((alwaysOnTop) => {
      return alwaysOnTop;
    });
  }

  static async isWindowMovable() {
    return await window.electron.isWindowMovable().then((movable) => {
      return movable;
    });
  }

  static async isWindowMinimizable() {
    return await window.electron.isWindowMinimizable().then((minimizable) => {
      return minimizable;
    });
  }

  static async isWindowMaximizable() {
    return await window.electron.isWindowMaximizable().then((maximizable) => {
      return maximizable;
    });
  }

  static async isWindowClosable() {
    return await window.electron.isWindowClosable().then((closable) => {
      return closable;
    });
  }

  static async isWindowMenuBarVisible() {
    return await window.electron.isWindowMenuBarVisible().then((visible) => {
      return visible;
    });
  }
}
