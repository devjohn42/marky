import { cn, formatDateFromMs } from '@renderer/utils'
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
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        `w-[97%] hover:bg-raisin_dark hover:shadow-md flex flex-col gap-2 items-start justify-center px-2 py-3 mb-2 rounded-[4px]
         transition-colors ease-in-out duration-200 cursor-pointer
         border-l-4 border-l-moonstone border-opacity-30

         ${isActive ? 'bg-raisin_dark shadow-md border-l-4 border-l-moonstone border-opacity-100' : ''}
        `,
        className,
      )}
      {...props}
    >
      <h3 className="text-alice font-primary font-semibold truncate">
        {title}
      </h3>
      <span className="text-alice/50 text-xs font-light">{date}</span>
    </div>
  )
}
