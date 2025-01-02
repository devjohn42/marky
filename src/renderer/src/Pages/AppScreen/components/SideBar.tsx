import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import NoteRowButtons from './ui/NoteRowButtons'
import { NotePreviewList } from './ui/NotePreviewList'

type AsideProps = ComponentProps<'aside'>

const SideBar = ({ className, children, ...props }: AsideProps) => {
  return (
    <aside
      className={cn('w-[25%] px-2 mt-10 flex flex-col gap-3', className)}
      {...props}
    >
      <NoteRowButtons />
      {/* <div className="mt-4">Notes</div> */}
      <NotePreviewList />
    </aside>
  )
}

export default SideBar
