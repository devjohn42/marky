import { cn } from '@renderer/utils'
import { ComponentProps, useRef } from 'react'

type AsideProps = ComponentProps<'aside'>

const SideBar = ({ className, children, ...props }: AsideProps) => {
  return (
    <aside
      className={cn(
        'w-[25%] bg-raisin px-2 pt-3 flex flex-col gap-3 shadow-[4px_0px_8px_-8px_rgb(0,0,0)] shado',
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

export default SideBar
