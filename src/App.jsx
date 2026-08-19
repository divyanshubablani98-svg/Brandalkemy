import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Work from './Pages/Work'
import Services from './Pages/Services'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
<Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App