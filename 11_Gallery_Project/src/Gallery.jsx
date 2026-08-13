import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card';

const Gallery = () => {

    const [userData, setUserData] = useState([]);
    const [index, setIndex] = useState(1);

    const getData = async () => {
        const response = await axios.get(
            `https://picsum.photos/v2/list?page=${index}&limit=50`
        );

        setUserData(response.data);
    }

    useEffect(() => {
        getData();
    }, [index]);


    let printUserData = (
        <h3 className='text-gray-300 text-lg font-bold absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
            Loading
        </h3>
    );


    if (userData.length > 0) {
        printUserData = userData.map((elem, idx) => (
            <Card
                key={elem.id || idx}
                elem={elem}
            />
        ));
    }


    return (
        <div className='bg-black overflow-auto h-screen p-4 text-white'>

            <h1 className='fixed rounded-xl text-m p-1.5 bg-red-400 text-black'>
                PNo. : {index}
            </h1>

            <div className='flex flex-wrap gap-4'>
                {printUserData}
            </div>


            <div className='flex justify-center gap-6 items-center p-4'>

                {index > 1 && (
                    <button
                        style={{ opacity: index == 1 ? 0.5 : 1 }}//km dikhega
                        onClick={() => {
                            setIndex(prev => prev - 1);
                            setUserData([]);
                        }}
                        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded-xl px-4 py-2 font-semibold'
                    >
                        Prev
                    </button>
                )}

                <div className='text-white font-bold'>
                    Page {index}
                </div>

                <button
                    onClick={() => {
                        setIndex(prev => prev + 1);
                        setUserData([]);
                    }}
                    className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded-xl px-4 py-2 font-semibold'
                >
                    Next
                </button>

            </div>

        </div>
    )
}

export default Gallery