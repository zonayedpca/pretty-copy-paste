const path = require('path');
const {app, Tray, Menu, BrowserWindow, clipboard, globalShortcut} = require('electron');
const clipboardy = require('clipboardy');

const iconPath = path.join(__dirname, 'icon.png');
let appIcon = null;
let win = null;
let arr = [];

app.on('ready', () => {
  let state = 0;
  let change = 0;
  win = new BrowserWindow({show: false});
  const brandNewArr = [{
    label: 'MultiCopier',
    type: 'checkbox',
    enabled: false
  }];
  var contextMenu = Menu.buildFromTemplate(brandNewArr);
  appIcon = new Tray(iconPath);
  appIcon.setToolTip("Pretty Copy Paste");
  appIcon.setContextMenu(contextMenu);
  const copy = globalShortcut.register('CommandOrControl+Shift+C', () => {
    var newItem = {
      label: clipboardy.readSync(),
      type: 'checkbox'
    }
    arr.push(newItem);
    contextMenu = Menu.buildFromTemplate(arr);
    appIcon.setContextMenu(contextMenu);
  });

  const paste = globalShortcut.register('CommandOrControl+Shift+V', () => {
    if(arr.length > 0) {
      clipboardy.writeSync(arr[state].label);
      arr[state].checked = true;
      const newArr = arr.map((a) => {
        const newlyMadeItem = {
          label: a.label,
          type: a.type,
          checked: a.checked === true ? a.checked = false : undefined
        }
        return newlyMadeItem;
      });
      newArr[state].checked = true;
      contextMenu = Menu.buildFromTemplate(newArr);
      appIcon.setContextMenu(contextMenu);
      change++;
      state = change % arr.length;
    } else {
      console.log('No Items Found');
    }
  });

  const clear = globalShortcut.register('CommandOrControl+Shift+X', () => {
    const clearedArr = [{
      label: 'Cleared!',
      enabled: false
    }];
    arr = [];
    state = 0;
    contextMenu = Menu.buildFromTemplate(clearedArr);
    appIcon.setContextMenu(contextMenu);
  });
});
