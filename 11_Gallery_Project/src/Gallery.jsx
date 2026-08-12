import React, { useEffect, useState } from 'react'
import axios from "axios"

const Gallery = () => {
    const [userData, setUserData] = useState([])//it will store data that coming from api

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
            setUserData(( response.data))
        }
        getData()
    },[])


    return (
        <div className='grid grid-cols-4 gap-5'>
            {userData.map((elem, idx) => (
                <div key={idx}>

                    <a
                        href={elem.url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
                            <img
                                className='h-full w-full object-cover'
                                src={elem.download_url}
                                alt={elem.author}
                            />
                        </div>
                    </a>

                    <h1 className='font-bold text-lg'>
                        {elem.author}
                    </h1>

                </div>
            ))}
        </div>
    )
}

export default Gallery
