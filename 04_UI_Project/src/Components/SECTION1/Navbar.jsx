import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 bg-white' >
      <div className='flex justify-between items-center px-10 py-4'>
        <h2 className='uppercase text-l font-semibold rounded-2xl bg-black text-white py-2 px-3'>target audience</h2>
        <div className='uppercase text-m rounded-3xl px-3 py-2 bg-gray-200'>
          digital  banking  platform
        </div>
      </div>
    </div>
  )
}

export default Navbar
