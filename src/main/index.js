const electron = require('electron');
const electronDebug = require('electron-debug');

const {app, BrowserWindow} = electron;

electronDebug();

app.on('ready', function () {
    const mainWindow = new BrowserWindow();
    mainWindow.loadURL('file://' + __dirname + '/../renderer/index.html');
});
