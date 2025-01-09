import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
} from '@mdxeditor/editor'
import { useMarkdownNote } from '@renderer/hooks/useMarkdownNote'
import { atomSelectedNote } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'
import { ComponentProps, forwardRef } from 'react'

type MarkdownContentTitleProps = ComponentProps<'div'>

const MarkdownContentTitle = ({
  className,
  ...props
}: MarkdownContentTitleProps) => {
  const selectedNote = useAtomValue(atomSelectedNote)

  if (!selectedNote) return null

  return (
    <div className={cn('flex justify-center pt-1', className)} {...props}>
      <span className="text-alice/60">{selectedNote.title}</span>
    </div>
  )
}

// eslint-disable-next-line react/display-name
const MarkdownContent = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ ...props }, ref) => {
    const { markdownEditorRef, selectedNote, handleAutoSaving, handleBlur } =
      useMarkdownNote()

    if (!selectedNote) return null

    return (
      <div
        ref={ref}
        {...props}
        className="bg-raisin_dark w-[75%] overflow-y-auto bg_markdown_scroll flex flex-col justify-start px-2 py-1"
      >
        <MarkdownContentTitle />
        <MDXEditor
          ref={markdownEditorRef}
          className="w-full"
          key={selectedNote.title}
          markdown={selectedNote?.content}
          onChange={handleAutoSaving}
          onBlur={handleBlur}
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            markdownShortcutPlugin(),
          ]}
          contentEditableClassName="outline-none max-w-none text-large caret-[#74B1BE]
      prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4
      prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-['']
      prose-cod:after:content-['']"
        />
      </div>
    )
  },
)

export default MarkdownContent
