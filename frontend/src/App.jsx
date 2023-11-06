import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Lottery from './pages/Lottery';
import SignIn from './pages/SignIn';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lottery' element={<Lottery />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
