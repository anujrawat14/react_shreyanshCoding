import React, { useState } from 'react'

const App = () => {

  const [tittle, setTittle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted by :", tittle);
  }

  return (
    <div className='h-screen lg:flex text-white bg-black'>

      <form onSubmit={(e) => { submitHandler(e) }}
        className='flex flex-col gap-4  justify-between items-start p-10' >

        <input
          className='px-5 font-bold text-lg  w-full  py-2 outline-none rounded-lg border-2'
          type="text"
          placeholder='Enter Notes Heading'
          onChange={(e) => {
            setTittle((prev) => (e.target.value))
          }}
          value={tittle}
        />

        <textarea
          className='px-5 font-bold text-lg   h-32 w-full py-2 outline-none border-2 rounded-lg '
          type="text"
          placeholder='Enter Details' />

        <button className=' px-5 font-bold text-lg  py-2 w-full rounded-xl outline-none bg-white text-black'>Add Notes</button>

      </form>

    </div>
  )
}

export default App