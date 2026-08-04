import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Section1 = (props) => {
    return (


        <div className='h-screen w-auto  mx-20' >
            <Navbar />
            <Content cardData={props.cardData} />

        </div>

    )
}

export default Section1
