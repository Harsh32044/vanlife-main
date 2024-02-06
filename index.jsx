import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans';
import Footer from './components/Footer';
import { makeServer } from './server.js';
import VanItem from './components/VanItem.jsx';

if (process.env.NODE_ENV === 'development') {
 makeServer({ environment: 'development' });
}

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/vans' element={<Vans/>}/>
      <Route path='/vans/:id' element={<VanItem/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);