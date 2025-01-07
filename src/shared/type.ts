import { NoteInfo } from './models'

export type WindowControl = (action: 'minimize' | 'maximize' | 'close') => void

export type GetNotes = () => Promise<NoteInfo[]>
