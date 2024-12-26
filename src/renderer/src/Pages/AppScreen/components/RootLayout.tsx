import React from 'react'
import SideBar from './SideBar'
import MarkdownContent from './MarkdownContent'

const RootLayot = () => {
  return (
    <main className="bg-raisin w-full h-[100vh] mt-16 flex flex-1">
      <SideBar />
      <MarkdownContent />
    </main>
  )
}

export default RootLayot
