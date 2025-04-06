declare interface Window {
    electron: {
        setWindowFrameVisible: (visible: boolean) => void;
        setWindowTitle: (title: string) => void;
        resizeWindow: (width: number, height: number) => void;
    };
}