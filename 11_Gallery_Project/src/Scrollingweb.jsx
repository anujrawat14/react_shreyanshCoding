import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card';


const Scrollingweb = () => {

    const [userData, setUserData] = useState([]);
    const [index, setIndex] = useState(1);
    const [loading, setLoading] = useState(false);


    const getData = async () => {

        setLoading(true);

        const response = await axios.get(
            `https://picsum.photos/v2/list?page=${index}&limit=50`
        );

        // Add new page data to existing data
        setUserData(prev => [...prev, ...response.data]);

        setLoading(false);
    }


    useEffect(() => {
        getData();
    }, [index]);


    const handleScroll = (e) => {

        const {
            scrollTop,
            clientHeight,
            scrollHeight
        } = e.target;

        if (
            scrollTop + clientHeight >= scrollHeight - 10 &&
            !loading
        ) {
            setIndex(prev => prev + 1);
        }
    }


    let printUserData = (
        <h3 className='text-gray-300 text-lg font-bold'>
            Loading...
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
        <div
            className='bg-black overflow-auto h-screen p-4 text-white'
            onScroll={handleScroll}
        >

            <h1 className='fixed rounded-xl text-m p-1.5 bg-red-400 text-black'>
                PNo. : {index}
            </h1>

            <div className='flex flex-wrap gap-4'>
                {printUserData}
            </div>

            {loading && (
                <h3 className='text-gray-300 text-lg font-bold text-center p-4'>
                    Loading more...
                </h3>
            )}

        </div>
    )
}


export default Scrollingweb
