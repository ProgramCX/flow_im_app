declare interface Window {
  electron: {
    createNewWindow: (
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
    ) => void;
    setWindowFrameVisible: (visible: boolean) => void;
    setWindowTitle: (title: string) => void;
    resizeWindow: (width: number, height: number) => void;
    setWindowCentral: () => void;
    setWindowAlwaysOnTop: (alwaysOnTop: boolean) => void;
    setWindowVisible: (visible: boolean) => void;
    setWindowMenuBarVisible: (visible: boolean) => void;
    setWindowResizable: (resizable: boolean) => void;
    setWindowMovable: (movable: boolean) => void;
    setWindowMinimizable: (minimizable: boolean) => void;
    setWindowMaximizable: (maximizable: boolean) => void;
    setWindowFullScreen: (fullScreen: boolean) => void;
    setWindowBackgroundColor: (color: string) => void;
    setWindowIcon: (iconPath: string) => void;
    setWindowVisibleOnAllWorkspaces: (visible: boolean) => void;
    setWindowPosition: (x: number, y: number) => void;
    setWindowOpacity: (opacity: number) => void;
    setWindowInTaskbar: (inTaskbar: boolean) => void;
    minimizeWindow: () => void;
    maximizeWindow: () => void;
    restoreWindow: () => void;
    closeWindow: () => void;
    destroyWindow: () => void;
    getWindowPosition: () => Promise<{ x: number; y: number }>;
    getWindowSize: () => Promise<{ width: number; height: number }>;
    getWindowTitle: () => Promise<string>;
    getWindowBackgroundColor: () => Promise<string>;
    getWindowOpacity: () => Promise<number>;
    isWindowVisible: () => Promise<boolean>;
    isWindowMaximized: () => Promise<boolean>;
    isWindowMinimized: () => Promise<boolean>;
    isWindowFullScreen: () => Promise<boolean>;
    isWindowResizable: () => Promise<boolean>;
    isWindowVisibleOnAllWorkspaces: () => Promise<boolean>;
    isWindowAlwaysOnTop: () => Promise<boolean>;
    isWindowMovable: () => Promise<boolean>;
    isWindowMinimizable: () => Promise<boolean>;
    isWindowMaximizable: () => Promise<boolean>;
    isWindowClosable: () => Promise<boolean>;
    isWindowMenuBarVisible: () => Promise<boolean>;
  };
}
