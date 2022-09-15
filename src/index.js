const { app, BrowserWindow } = require('electron');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    
    autoHideMenuBar: true,
          nodeIntegration: true,
    webPreferences: {
      devTools: false 
      }
    
  });

  win.loadFile('./src/index.html')
};

app.whenReady().then(() => {
  createWindow()
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});
