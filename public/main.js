const { app, BrowserWindow } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev');

function createWindow () {
    const win = new BrowserWindow({
      width: 1000,
      height: 600,
      title: 'SzafirPoint Menedżer',
      webPreferences: {
        nodeIntegration: true,
      },
      icon: __dirname + '/favicon.ico',
      autoHideMenuBar: true,
    })
  
    win.loadURL(
        isDev
          ? 'http://localhost:3000'
          : `file://${path.join(__dirname, '../build/index.html')}`
      );

    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }
  }

  app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
