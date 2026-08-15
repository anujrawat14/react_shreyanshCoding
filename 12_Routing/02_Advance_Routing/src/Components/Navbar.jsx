import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Navbar = () => {
    return (
        <div className='text-white bg-cyan-800 flex justify-between px-8 py-4 '>
            <h2 className='text-xl font-semibold'> Shreyians Coding </h2>
            <div className='flex gap-10 '>
                <Link to='/' className='text-lg font-medium underline'>Home</Link>
                <Link to='/about' className='text-lg font-medium underline'>About</Link>
                <Link to="/courses" className='text-lg font-medium underline'>Courses</Link>
                <Link to="/product" className='text-lg font-medium underline'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar
