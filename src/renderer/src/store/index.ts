import { NoteInfo } from '@shared/models'
import { notesMock } from './mocks'
import { atom } from 'jotai'

export const atomNotes = atom<NoteInfo[]>(notesMock)

export const atomSelectedNoteIndex = atom<number | null>(null)

export const atomSelectedNote = atom((get) => {
  const notes = get(atomNotes)
  const selectedNoteIndex = get(atomSelectedNoteIndex)

  if (selectedNoteIndex === null) return null

  const selectedNote = notes[selectedNoteIndex]

  return {
    ...selectedNote,
    content: `Hello from Note ${selectedNoteIndex}`,
  }
})

export const createAtomNote = atom(null, (get, set) => {
  const notes = get(atomNotes)

  const title = `Note ${notes.length + 1}`

  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now(),
  }

  set(atomNotes, [
    newNote,
    ...notes.filter((note) => note.title !== newNote.title),
  ])

  set(atomSelectedNoteIndex, 0)
})
