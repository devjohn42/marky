import { GetNotes, ReadNote, WriteNote } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be anabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    local: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) =>
      ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) =>
      ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<WriteNote>) =>
      ipcRenderer.invoke('writeNote', ...args),
  })
  contextBridge.exposeInMainWorld('electron', {
    windowControl: (action: 'minimize' | 'maximize' | 'close') =>
      ipcRenderer.send('window-control', action),
  })
} catch (error) {
  console.log(error)
}
