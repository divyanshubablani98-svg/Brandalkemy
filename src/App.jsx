import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-onyx text-white flex flex-col font-sans selection:bg-amber selection:text-onyx antialiased">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;