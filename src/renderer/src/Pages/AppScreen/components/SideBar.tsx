import { cn } from '@renderer/utils'
import { ComponentProps, useRef } from 'react'

type AsideProps = ComponentProps<'aside'>

const SideBar = ({ className, children, ...props }: AsideProps) => {
  return (
    <aside
      className={cn('w-[25%] px-2 pt-3 flex flex-col gap-3', className)}
      {...props}
    >
      {children}
    </aside>
  )
}

export default SideBar
