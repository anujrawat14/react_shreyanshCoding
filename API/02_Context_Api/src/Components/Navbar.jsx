import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { theme } from '../Context/ThemeContext';

const Navbar = () => {

    // const name = useContext(theme);
    // console.log(name);
    const [theme1] = useContext(theme)

    return (
        <div className='{theme} flex justify-between  px-4 py-4'
        
            // style={{
            //     backgroundColor: theme1 === "light" ? "skyblue" : "gray"
            // }}
            >
            <h2 className='text-xl text-black'>Shreyians</h2>
            <Nav2 />
            {/* <h2>{name.ThemeContext}</h2> */}
        </div>
    )
}

export default Navbar