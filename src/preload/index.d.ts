import { GetNotes, ReadNote, WindowControl } from '@shared/types'

declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
    }
    electron: {
      windowControl: WindowControl
    }
  }
}

export {}
