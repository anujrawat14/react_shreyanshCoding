import React, { useState } from 'react'
import Navbar from './Components/Navbar'


const App = () => {
  const [theme, setTheme] = useState("Light")
  return (
    <div >
      {/* <Navbar theme={theme} /> normally theme aisa bhej skt hai parents to child */}

      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
