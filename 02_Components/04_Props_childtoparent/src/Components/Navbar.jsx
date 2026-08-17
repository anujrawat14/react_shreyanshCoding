import React from 'react'

const Navbar = (props) => {

    return (
        <div>
            <h1>{props.theme}</h1>
            <button className='bg-red-600'
             onClick={() => {
                props.setTheme("dark");
            }}
            >Change theme</button>
        </div>
    )
}

export default Navbar