import {
  CreateNote,
  DeleteNote,
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
      deleteNote: DeleteNote
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
