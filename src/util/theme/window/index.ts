const setWindowSize = (width: number, height: number) => {
    window.electron.resizeWindow(width, height)
    
}

const setWindowTitle = (title: string) => {
    document.title = title
}

const setWindowFrameVisible = (visible: boolean) => {
    window.electron.setWindowFrameVisible(visible)
}

export {setWindowFrameVisible, setWindowSize, setWindowTitle}