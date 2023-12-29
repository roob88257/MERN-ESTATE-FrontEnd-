import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import Header from './components/Header';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/about" element={<About />} />
     <Route path="/sign-in" element={<Signin />} />
     <Route path="/sign-out" element={<Signout />} />
     <Route path="/sign-up" element={<Signup />} />
     </Routes>
    </BrowserRouter>

  )
}

export default App