import setupWindowIpcHandlers from "./window";

const setupIpcHandlers = (win: Electron.BrowserWindow | null) => {
    setupWindowIpcHandlers(win);
};

export default setupIpcHandlers;