import React, { useContext } from 'react'
import { theme } from '../Context/ThemeContext';

const Nav2 = () => {

    // const themeData = useContext(theme);
const[theme1,settheme1]=useContext(theme); 

    return (

        <div className='font-semibold text-black text-lg flex gap-5'>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
            <h2>Services</h2>
            {/* <h2>{themeData.theme}</h2> */}
            <h2>{theme1}</h2>
        </div>

    )
}

export default Nav2