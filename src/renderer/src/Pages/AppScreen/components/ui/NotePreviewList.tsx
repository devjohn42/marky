import { notesMock } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'

type NotePreviewListProps = ComponentProps<'ul'>

export const NotePreviewList = ({ ...props }: NotePreviewListProps) => {
  return (
    <div className="overflow-y-auto -mr-2 pb-3">
      <ul {...props}>
        {notesMock.map((note, index) => (
          <NotePreview key={index} {...note} />
        ))}
      </ul>
    </div>
  )
}
