import { createAtomNote, deleteAtomNote } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useSetAtom } from 'jotai'
import { FaPlusCircle, FaTrash } from 'react-icons/fa'

const ActionButton = ({ children, className, type, title, onClick }) => {
  return (
    <button
      type={type}
      className={cn(
        `${type === 'add' ? 'border-moonstone text-moonstone' : 'border-carmine text-carmine'}`,
        'w-full text-sm font-semibold hover:rounded-[4px] hover:bg-raisin_dark border-[2px] py-1 duration-200',
        className,
      )}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  )
}

const NoteRowButtons = () => {
  const createNote = useSetAtom(createAtomNote)
  const deleteNote = useSetAtom(deleteAtomNote)

  const handleCreate = async () => {
    await createNote()
  }

  const handleDelete = () => {
    deleteNote()
  }
  return (
    <div className="w-full flex items-center gap-1">
      <ActionButton
        onClick={handleCreate}
        title={'Add New'}
        type={'add'}
        className="flex items-center justify-center gap-2"
      >
        <FaPlusCircle className="text-[14px]" />
      </ActionButton>
      <ActionButton
        onClick={handleDelete}
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
