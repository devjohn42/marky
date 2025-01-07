import { NoteInfo } from '@shared/models'
import { notesMock } from './mocks'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'

const loadNotes = async () => {
  const notes = await window.context.getNotes()

  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

const atomAsyncNotes = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const atomNotes = unwrap(atomAsyncNotes, (prev) => prev)

export const atomSelectedNoteIndex = atom<number | null>(null)

export const atomSelectedNote = atom((get) => {
  const notes = get(atomNotes)
  const selectedNoteIndex = get(atomSelectedNoteIndex)

  if (selectedNoteIndex === null || !notes) return null

  const selectedNote = notes[selectedNoteIndex]

  return {
    ...selectedNote,
    content: `Hello from Note ${selectedNoteIndex}`,
  }
})

export const createAtomNote = atom(null, (get, set) => {
  const notes = get(atomNotes)

  if (!notes) return

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

export const deleteAtomNote = atom(null, (get, set) => {
  const notes = get(atomNotes)
  const selectedNote = get(atomSelectedNote)

  if (!selectedNote || !notes) return

  set(
    atomNotes,
    notes.filter((note) => note.title !== selectedNote.title),
  )

  set(atomSelectedNoteIndex, null)
})
