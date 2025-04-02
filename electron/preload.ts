import { ipcRenderer, contextBridge } from 'electron';

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('electron', {
  // Resize the window
  resizeWindow: (width: number, height: number) => ipcRenderer.send('resize-window', width, height),
  
  // Control window frame visibility
  setWindowFrameVisible: (visible: boolean) => ipcRenderer.send('set-window-frame-visible', visible),

  // Set window title
  setWindowTitle: (title: string) => ipcRenderer.send('set-window-title', title),

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
