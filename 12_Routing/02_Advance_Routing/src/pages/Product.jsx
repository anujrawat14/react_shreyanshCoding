import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex justify-center text-black  gap-10 py-4'>
      <Link className='text-lg font-medium underline' to='/product/men'>Men</Link>
      <Link className='text-lg font-medium underline' to='/product/women'>Women</Link>
      <Link to='/product/kid' className='text-lg font-medium underline'>Kids</Link>
      {/* <h1 className='heading'>Product Page</h1> */}
      <Outlet />
    </div>
  )
}

export default Product
