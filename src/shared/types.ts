import { NoteContent, NoteInfo } from './models'

export type WindowControl = (action: 'minimize' | 'maximize' | 'close') => void

export type CreateNote = () => Promise<NoteInfo['title'] | false>

export type GetNotes = () => Promise<NoteInfo[]>
export type ReadNote = (title: NoteInfo['title']) => Promise<NoteContent>
export type WriteNote = (
  title: NoteInfo['title'],
  content: NoteContent,
) => Promise<void>
