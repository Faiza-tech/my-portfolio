import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/contact'
import Project from './Routes/Project'
import './App.css'

function App() {


  return (
    <>
      <div>
        {/*<Navbar/>*/}
        <Routes>
          <Route path='/'         element={<Home />} />
          <Route path='/about'    element={<About />} />
          <Route path='/project'  element={<Project />} />
          <Route path='/contact'  element={<Contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
