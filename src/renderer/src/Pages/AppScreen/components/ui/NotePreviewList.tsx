import { ComponentProps } from 'react'
import { isEmpty } from 'lodash'
import { NotePreview } from './NotePreview'
import { useMarkdownNotesList } from '@renderer/hooks/useMarkdownNotesList'
import { cn } from '@renderer/utils'

type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({
  onSelect,

  ...props
}: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useMarkdownNotesList({
    onSelect,
  })

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={cn('text-center pt-3')} {...props}>
        <span className="text-alice">No Notes Yet!</span>
      </ul>
    )
  }
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
