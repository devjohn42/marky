import { HashRouter, Routes, Route } from 'react-router-dom'

import TitleBar from './components/global/TitleBar'
import Home from './Pages/Home'
import Markdown from './Pages/Markdown'

export const App = (): JSX.Element => {
  return (
    <>
      <TitleBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="markdown" element={<Markdown />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
