import { WindowControl } from '@shared/type'

declare global {
  interface Window {
    context: {
      locale: string
    }
    electron: {
      windowControl: WindowControl
    }
  }
}

export {}
