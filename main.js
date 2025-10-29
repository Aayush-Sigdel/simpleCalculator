const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

app.disableHardwareAcceleration(); // Linux GPU fix
app.setName('Qraft');
app.setAppUserModelId('com.qraft.qrscanner');

console.log(path.join(__dirname, 'url.html'));

// Hot reload for development (optional)
try {
    if (process.env.NODE_ENV !== 'production') {
        // Resolve electron-reload if installed (dev dependency)
        const electronReload = require('electron-reload');
        const electronPath = require('electron');

        // Pass __dirname to watch the project and use the electron executable from the installed package
        electronReload(__dirname, {
            electron: require('electron'),
            hardResetMethod: 'exit',
        });
    }
} catch (err) {
    // Ignore missing dev dependency in production or when not installed
    console.log('electron-reload not enabled:', err.message);
}

function createWindow() {
    const win = new BrowserWindow({
        width: 370,
        height: 520,
        minWidth: 370,
        minHeight: 520,
        maxHeight: 520,
        maxWidth: 370,
        resizable: false,
        autoHideMenuBar: true, // hide menu bar (Alt will not toggle after we remove menu below)
        icon: path.join(__dirname, 'assets/images/Logo.png'),
        webPreferences: {
            nodeIntegration: true, // allow Node.js in renderer
            contextIsolation: false,
        },
    });

    // Load the HTML file using absolute path
    win.loadFile(path.join(__dirname, 'index.html'));

    // Completely remove application menu and hide the window menu bar
    try {
        Menu.setApplicationMenu(null); // removes File/Edit/View menu
    } catch (_) {}
    if (typeof win.setMenuBarVisibility === 'function') {
        win.setMenuBarVisibility(false);
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
