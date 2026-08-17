import React, { useContext } from 'react'
import { theme } from '../Context/ThemeContext'

const Button = () => {

    const [theme1, settheme1] = useContext(theme);

    return (
        <div>
            <button
                onClick={() => {
                    settheme1((prev => prev==="light" ? "dark":"light"));
                    // settheme1("dark")
                }}
                className='bg-red-400 mt-4 p-2.5'>Change theme</button>
        </div>
    )
}

export default Button