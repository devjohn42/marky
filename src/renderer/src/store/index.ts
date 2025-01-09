import { NoteInfo, NoteContent } from '@shared/models'
// import { notesMock } from './mocks'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'

const loadNotes = async () => {
  const notes = await window.context.getNotes()

  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

const atomAsyncNotes = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const atomNotes = unwrap(atomAsyncNotes, (prev) => prev)

export const atomSelectedNoteIndex = atom<number | null>(null)

export const atomSelectedNoteAsync = atom(async (get) => {
  const notes = get(atomNotes)
  const selectedNoteIndex = get(atomSelectedNoteIndex)

  if (selectedNoteIndex === null || !notes) return null

  const selectedNote = notes[selectedNoteIndex]

  const noteContent = await window.context.readNote(selectedNote.title)

  return {
    ...selectedNote,
    content: noteContent,
  }
})

export const atomSelectedNote = unwrap(
  atomSelectedNoteAsync,
  (prev) =>
    prev ?? {
      title: '',
      content: '',
      lastEditTime: Date.now(),
    },
)

export const createAtomNote = atom(null, async (get, set) => {
  const notes = get(atomNotes)

  if (!notes) return

  const title = await window.context.createNote()

  if (!title) return

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

export const atomSavedNote = atom(
  null,
  async (get, set, newContent: NoteContent) => {
    const notes = get(atomNotes)
    const selectedNote = get(atomSelectedNote)

    if (!selectedNote || !notes) return

    await window.context.writeNote(selectedNote.title, newContent)

    set(
      atomNotes,
      notes.map((note) => {
        if (note.title === selectedNote.title) {
          return {
            ...note,
            lastEditTime: Date.now(),
          }
        }

        return note
      }),
    )
  },
)
