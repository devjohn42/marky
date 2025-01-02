import { cn } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = true,
  className,
  ...props
}: NotePreviewProps) => {
  return (
    <div
      className={cn(
        'w-[97%] flex flex-col items-start px-2 py-3 rounded-[4px] transition-colors duration-200 cursor-pointer',
        {
          'hover:bg-raisin_dark hover:shadow-md': isActive,
          'bg-raisin': !isActive,
        },
        className,
      )}
      {...props}
    >
      <h3 className="text-alice font-primary mb-1 font-semibold truncate">
        {title}
      </h3>
      <span className="text-alice/50 mb-2 text-xs font-light">
        {lastEditTime}
      </span>
    </div>
  )
}
