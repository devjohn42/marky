import { WindowControl } from '@shared/type'

declare global {
  interface Window {
    context: {
      // TODO
    }
    electron: {
      windowControl: WindowControl
    }
  }
}

export {}
