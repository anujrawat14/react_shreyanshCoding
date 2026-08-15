import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Router, Routes } from 'react-router-dom'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kid from './pages/Kid'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './Components/Navbar2'


const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        //dynamic routing
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='/product' element={<Product />}>
        //nested routing
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kid' element={<Kid />} />
        </Route>


        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
