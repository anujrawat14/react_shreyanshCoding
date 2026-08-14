import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (

    <div className='flex flex-col justify-between h-screen '>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* </div> */}
      {/* routes /' which page should opn  */}



      <div className='mb-5 h-10  w-full  bg-slate-500'>
        <h1 className=' text-center text-xl font-bold'> THis is footer </h1>
      </div>

    </div>
  )
}

export default App
