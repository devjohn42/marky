import { useRef } from 'react'

import RootLayot from './components/RootLayout'
import SideBar from './components/SideBar'
import NoteRowButtons from './components/ui/NoteRowButtons'
import { NotePreviewList } from './components/ui/NotePreviewList'
import MarkdownContent from './components/MarkdownContent'

const AppScreen = () => {
  const markdownContentRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    markdownContentRef.current?.scrollTo(0, 0)
  }
  return (
    <RootLayot>
      <SideBar>
        <NoteRowButtons />
        <NotePreviewList onSelect={resetScroll} />
      </SideBar>
      <MarkdownContent ref={markdownContentRef} />
    </RootLayot>
  )
}

export default AppScreen
