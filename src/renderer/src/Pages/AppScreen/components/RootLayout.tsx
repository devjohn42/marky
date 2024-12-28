import { ComponentProps } from 'react'
import { cn } from '@renderer/utils'

type RootLayotProps = ComponentProps<'main'>

const RootLayot = ({ className, children, ...props }: RootLayotProps) => {
  return (
    <main
      className={cn('bg-raisin w-full h-[100vh] flex flex-1', className)}
      {...props}
    >
      {children}
    </main>
  )
}

export default RootLayot
