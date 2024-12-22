import { cn } from '@renderer/utils'
import { MdHorizontalRule, MdCropFree, MdClose } from 'react-icons/md'

interface TitleBarButtonProps {
  className?: string
  children: any
}

const TitleBarButton = ({
  className,
  children,
  ...props
}: TitleBarButtonProps) => {
  return (
    <button
      className={cn('h-8 px-2 transition-colors duration-150', className)}
      {...props}
    >
      {children}
    </button>
  )
}

const TitleBar = () => {
  return (
    <div className="h-8 w-full absolute top-0 right-0 flex items-center justify-between pl-6 shadow-md">
      <div className="flex items-center absolute right-0">
        <TitleBarButton className="hover:bg-moonstone/10 ">
          <MdHorizontalRule className="text-alice text-[18px]" />
        </TitleBarButton>
        <TitleBarButton className="hover:bg-moonstone/10">
          <MdCropFree className="text-alice text-[18px]" />
        </TitleBarButton>
        <TitleBarButton className="hover:bg-[#FF1212]/60">
          <MdClose className="text-alice text-[21px]" />
        </TitleBarButton>
      </div>
    </div>
  )
}

export default TitleBar
