import { NoteContent, NoteInfo } from './models'

export type WindowControl = (action: 'minimize' | 'maximize' | 'close') => void

export type GetNotes = () => Promise<NoteInfo[]>
export type ReadNote = (title: NoteInfo['title']) => Promise<NoteContent>
