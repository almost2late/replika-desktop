const { app, BrowserWindow } = require("electron");
app.whenReady().then(() => {
  new BrowserWindow({
    minWidth: 1280,
    minHeight: 720,
    width: 1280,
    minHeight: 720,
    autoHideMenuBar: true,
  }).loadURL("https://my.replika.com");
});
