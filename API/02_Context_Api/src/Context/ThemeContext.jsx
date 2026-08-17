import React, { createContext, useState } from 'react'


// export const ThemeDataContext = createContext();//creating context 
// //isko export kr diya

//contxt ko create krenga or export krenga
export const theme = createContext();

const ThemeContext = (props) => {

    const [theme1, settheme1] = useState("light")
    return (
        <div>
            {/* provideing context */}
            <theme.Provider value={[theme1, settheme1]}>
                {props.children}
            </theme.Provider>
        </div>
    )
}

export default ThemeContext