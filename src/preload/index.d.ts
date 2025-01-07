import { GetNotes, WindowControl } from '@shared/type'

declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
    }
    electron: {
      windowControl: WindowControl
    }
  }
}

export {}
