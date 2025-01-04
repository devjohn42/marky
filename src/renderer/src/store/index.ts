import { NoteInfo } from '@shared/models'
import { notesMock } from './mocks'
import { atom } from 'jotai'

export const atomNotes = atom<NoteInfo[]>(notesMock)

export const atomSelectedNoteIndex = atom<number | null>(null)

export const atomSelectedNote = atom((get) => {
  const notes = get(atomNotes)
  const selectedNoteIndex = get(atomSelectedNoteIndex)

  if (!selectedNoteIndex) return null

  const selectedNote = notes[selectedNoteIndex]

  return {
    ...selectedNote,
    content: `Hello from Note ${selectedNoteIndex}`,
  }
})
