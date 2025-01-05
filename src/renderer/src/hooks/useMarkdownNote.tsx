import { atomSelectedNote } from '@renderer/store'
import { useAtomValue } from 'jotai'

export const useMarkdownNote = () => {
  const selectedNote = useAtomValue(atomSelectedNote)

  return {
    selectedNote,
  }
}
