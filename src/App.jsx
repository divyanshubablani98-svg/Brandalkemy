import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
import Home from './Pages/home'
import About from './Pages/about'
import Work from './Pages/work'
import Services from './Pages/services'
import Blog from './Pages/blog'
import Contact from './Pages/contact'
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