import MarkdownContent from './components/MarkdownContent'
import RootLayot from './components/RootLayout'
import SideBar from './components/SideBar'

const AppScreen = () => {
  return (
    <RootLayot>
      <SideBar />
      <MarkdownContent />
    </RootLayot>
  )
}

export default AppScreen
