const { BrowserWindow, ipcMain } = require('electron');
const electron = require('electron');

const { app } = electron;


function createWindow() {
    one = new BrowserWindow({
        title: 'parent',
        show: true
    });
    two = new BrowserWindow({ title: 'child', show: true});
    ipcMain.on('receive-message', (data) => {
        console.log(data);
        ipcMain.emit('send-message');
    })


    one.loadURL(`file://${__dirname}/one.html`);
    two.loadURL(`file://${__dirname}/two.html`);

    one.webContents.openDevTools({mode: 'detach'});
    two.webContents.openDevTools({mode: 'detach'});

    one.on('closed', () => {
        one = null;
    })
    two.on('closed', () => {
        two = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
});

app.on('activate', () => {
    if (one == null) {
        createWindow();
    }
    if (two == null) {
        createWindow();
    }
})