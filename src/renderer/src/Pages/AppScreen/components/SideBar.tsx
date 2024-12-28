import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import NoteRowButtons from './ui/NoteRowButtons'

type AsideProps = ComponentProps<'aside'>

const SideBar = ({ className, children, ...props }: AsideProps) => {
  return (
    <aside
      className={cn('w-[25%] px-2 mt-10 flex flex-col', className)}
      {...props}
    >
      <NoteRowButtons />
      <div className="mt-4">Notes</div>
    </aside>
  )
}

export default SideBar
