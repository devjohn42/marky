import { cn } from '@renderer/utils'
import { MdHorizontalRule, MdCropFree, MdClose } from 'react-icons/md'

interface TitleBarButtonProps {
  className?: string
  children: any
  onClick?: () => void
}

type WindowControlActionType = 'minimize' | 'maximize' | 'close'

const TitleBarButton = ({
  className,
  children,
  onClick,
  ...props
}: TitleBarButtonProps) => {
  return (
    <button
      className={cn('h-8 px-2 transition-colors duration-150', className)}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const TitleBar = () => {
  const handleWindowControl = (action: WindowControlActionType) => {
    window.electron.windowControl(action)
  }

  return (
    <div className="h-8 w-full absolute top-0 right-0 flex items-centers pl-6 shadow-md">
      <header className="w-full h-8 absolute left-0"></header>
      <div className="flex items-center absolute z-20 right-0 titleBarButton">
        <TitleBarButton
          className="hover:bg-moonstone/10"
          onClick={() => handleWindowControl('minimize')}
        >
          <MdHorizontalRule className="text-alice text-[18px]" />
        </TitleBarButton>
        <TitleBarButton
          className="hover:bg-moonstone/10"
          onClick={() => handleWindowControl('maximize')}
        >
          <MdCropFree className="text-alice text-[18px]" />
        </TitleBarButton>
        <TitleBarButton
          className="hover:bg-[#FF1212]/60"
          onClick={() => handleWindowControl('close')}
        >
          <MdClose className="text-alice text-[21px]" />
        </TitleBarButton>
      </div>
    </div>
  )
}

export default TitleBar
