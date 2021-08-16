const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
// const ipcMain = electron.ipcMain;
const {app, BrowserWindow, ipcMain, Menu, session} = electron;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

// process.env.NODE_ENV = 'production';

let mainWindow, portWindow;

function createWindow() {
  console.log(electron);
  mainWindow = new BrowserWindow({minWidth:1000, minHeight: 800});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  
  mainWindow.on('closed', () => mainWindow = null);

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
  console.log(session);
}

function createPortWindow() {
  portWindow = new BrowserWindow({minWidth:600, minHeight: 700, parent: mainWindow});
  portWindow.loadURL(isDev ? 'http://localhost:3000/#/port' : `file://${path.join(__dirname, '../build/index.html')}`);
  
  const portMenu = Menu.buildFromTemplate(portMenuTemplate);
  // Menu.setApplicationMenu(portMenu);

  portWindow.on('close', e => {
    e.preventDefault();
    portWindow.hide();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// catch port

ipcMain.on('send-port', (e, port)=> {
  console.log(port);
  mainWindow.webContents.send('send-port', port);
  portWindow.close();
});

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Change Port',
        click() {
          createPortWindow();
        }
      },
      {
        role: 'reload'
      }
    ]
  }
]

const portMenuTemplate = [
  {
    role: 'reload'
  }
]

// if mac add empty object to menu

if(process.platform==='darwin') {
  mainMenuTemplate.unshift({});
}

if(isDev) {
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator:process.platform==='darwin'?'Command+I':
        'Ctrl+I',
        click(item, focussedWindow) {
          focussedWindow.toggleDevTools();
        }
      }
    ]
  })
}
