import { atomNotes, atomSelectedNoteIndex } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export const useMarkdownNotesList = ({
  onSelect,
}: {
  onSelect?: () => void
}) => {
  const notes = useAtomValue(atomNotes)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(
    atomSelectedNoteIndex,
  )

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)

    if (onSelect) onSelect()
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect,
  }
}
