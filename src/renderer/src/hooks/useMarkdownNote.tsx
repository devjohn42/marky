import { MDXEditorMethods } from '@mdxeditor/editor'
import { atomSavedNote, atomSelectedNote } from '@renderer/store'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'
import { throttle } from 'lodash'
import { autoSavingTime } from '@shared/constants'

export const useMarkdownNote = () => {
  const selectedNote = useAtomValue(atomSelectedNote)
  const saveNote = useSetAtom(atomSavedNote)
  const markdownEditorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) return

      console.info('Auto saving:', selectedNote.title)

      await saveNote(content)
    },
    autoSavingTime,
    { leading: false, trailing: true },
  )

  const handleBlur = async () => {
    if (!selectedNote) return

    handleAutoSaving.cancel()

    const content = markdownEditorRef.current?.getMarkdown()

    if (content != null) {
      await saveNote(content)
    }
  }

  return {
    markdownEditorRef,
    selectedNote,
    handleAutoSaving,
    handleBlur,
  }
}
