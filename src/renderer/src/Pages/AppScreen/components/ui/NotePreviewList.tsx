import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { useMarkdownNotesList } from '@renderer/hooks/useMarkdownNotesList'

type NotePreviewListProps = ComponentProps<'ul'>

export const NotePreviewList = ({ ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useMarkdownNotesList(
    {},
  )

  return (
    <div className="overflow-y-auto -mr-2 mb-1">
      <ul {...props}>
        {notes.map((note, index) => (
          <NotePreview
            key={index}
            isActive={selectedNoteIndex === index}
            onClick={handleNoteSelect(index)}
            {...note}
          />
        ))}
      </ul>
    </div>
  )
}
