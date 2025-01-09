import {
  CreateNote,
  GetNotes,
  ReadNote,
  WriteNote,
  WindowControl,
} from '@shared/types'

declare global {
  interface Window {
    context: {
      locale: string
      createNote: CreateNote
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
    }
    electron: {
      windowControl: WindowControl
    }
  }
}

export {}
