import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
} from '@mdxeditor/editor'

const MarkdownContent = () => {
  return (
    <div className="bg-raisin_dark w-[75%] overflow-y-auto bg_markdown_scroll mt-8 flex justify-start px-2 py-1">
      <MDXEditor
        className="w-full"
        markdown={'> Hello from Marky'}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
        ]}
        contentEditableClassName="outline-none minh-h-screen max-w-none text-large px-4 caret-[#74b1be]
      prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4
      prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-['']
      prose-cod:after:content-['']"
      />
    </div>
  )
}

export default MarkdownContent
