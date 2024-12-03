import { useState } from 'react'
import './index.css'
import { HelloWorld, NavComponent } from './components/NavComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/Home" element={<NavComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
