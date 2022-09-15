const { autoUpdater } = require("electron-updater");

const { app, BrowserWindow } = require('electron');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
  });

  win.loadFile('./src/index.html')
};

app.whenReady().then(() => {
  autoUpdater.checkForUpdatesAndNotify()


  createWindow()
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});
