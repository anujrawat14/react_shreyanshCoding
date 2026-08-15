import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (


        <div className='flex justify-between px-7 pt-1.5  bg-slate-600'>

            <h1 className='text-xl font-semibold'>Shreyians Coding</h1>

            <div className='flex gap-6 text-m font-medium'>

                {/* <a className='underline' href="/">Home</a>
                <a className='underline' href="/about">About</a>
                <a className='underline' href="/contact">Contact</a> */}
                
                {/* no reload  */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>

    )
}

export default Navbar
