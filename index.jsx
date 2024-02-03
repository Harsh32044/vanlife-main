import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans';
import Footer from './components/Footer';

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/vans' element={<Vans/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);