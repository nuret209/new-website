import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import SystemApps from './pages/SystemApps'
import ReadMe from './pages/ReadMe'
import Trash from './pages/Trash'
import Calculator from './pages/Calculator'
import NotePad from './pages/NotePad'
import AboutThisOS from './pages/AboutThisOS'

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/systemapps' element={<SystemApps />} />
          <Route path='/readme' element={<ReadMe />} />
          <Route path='/trash' element={<Trash />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/notepad' element={<NotePad />} />
          <Route path='/about' element={<AboutThisOS />} />





        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
