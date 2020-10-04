const { app, BrowserWindow } = require('electron')



function createWindow () {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({
    // width: 900,
    // height: 700,
	autoHideMenuBar: true,
    show:false,
    // useContentSize: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.maximize();
  win.show();
  win.webContents.openDevTools()
  // y carga el  index.html de la aplicación.
  win.loadFile('sistema/index.html')
}

app.whenReady().then(createWindow)