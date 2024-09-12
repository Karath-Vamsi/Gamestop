import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Vanity.css'
import Home from './pages/Home'
import Spotlight from './pages/Spotlight'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotlight" element={<Spotlight />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
