const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const createWindow = () => {
    Menu.setApplicationMenu(null)
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration:true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
    //win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  })