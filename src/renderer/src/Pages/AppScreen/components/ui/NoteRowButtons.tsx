import { cn } from '@renderer/utils'
import { FaPlusCircle, FaTrash } from 'react-icons/fa'

const ActionButton = ({ children, className, type, title }) => {
  return (
    <button
      type={type}
      className={cn(
        `${type === 'add' ? 'border-moonstone text-moonstone' : 'border-carmine text-carmine'}`,
        'w-full text-sm font-semibold hover:rounded-[4px] hover:bg-raisin_dark border-[2px] py-1 duration-200',
        className,
      )}
    >
      {title}
      {children}
    </button>
  )
}

const NoteRowButtons = () => {
  return (
    <div className="w-full flex items-center gap-1">
      <ActionButton
        title={'Add New'}
        type={'add'}
        className="flex items-center justify-center gap-2"
      >
        <FaPlusCircle className="text-[14px]" />
      </ActionButton>
      <ActionButton
        title={'Delete'}
        type={'delete'}
        className="flex items-center justify-center gap-2"
      >
        <FaTrash className="text-[14px]" />
      </ActionButton>
    </div>
  )
}

export default NoteRowButtons
