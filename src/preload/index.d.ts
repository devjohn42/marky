import { GetNotes, ReadNote, WindowControl, WriteNote } from '@shared/types'

declare global {
  interface Window {
    context: {
      locale: string
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
