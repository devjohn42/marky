import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be anabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    local: navigator.language,
  })
  contextBridge.exposeInMainWorld('electron', {
    windowControl: (action: 'minimize' | 'maximize' | 'close') =>
      ipcRenderer.send('window-control', action),
  })
} catch (error) {
  console.log(error)
}
