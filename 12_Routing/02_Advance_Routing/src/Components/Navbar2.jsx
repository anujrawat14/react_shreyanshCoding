import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    //use navigate hook
    const navigate = useNavigate()
    return (
        <div className='bg-cyan-900'>
            <div className='flex justify-center gap-10'>

                <button
                    onClick={() => (navigate('/'))}
                    className='bg-yellow-500 rounded text-xl text-black p-2 m-4'> Return to home page</button>
                <button
                    onClick={() => (navigate(-1))}
                    className='bg-yellow-500 rounded text-xl text-black p-2 m-4'> Return to prev page</button>
                <button
                    onClick={() => (navigate(+1))}
                    className='bg-yellow-500 rounded text-xl text-black p-2 m-4'> Return to next page</button>
            </div>
        </div>
    )
}

export default Navbar2
