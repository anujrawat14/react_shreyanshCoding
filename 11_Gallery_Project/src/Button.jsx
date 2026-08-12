import React, { useState } from 'react'
import axios from "axios"

const Button = () => {

  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=200');

    setUserData(response.data);
    console.log(response.data);

  }

  let printUserdata = "no user data to show";

  if (userData.length > 0) {
    printUserdata = userData.map((elem, idx) => (
      <div key={idx}>

        <a href={elem.url} target='_blank'>

          <div
            className='h-40 w-44 bg-white object-cover overflow-hidden rounded-xl'
          >
            <img className='h-full w-full' src={elem.download_url} alt="" />
          </div>

        </a>
 
        <h1 className='font-bold text-lg'>{elem.author}</h1>

      </div>
    ))
  }
  return (
    <div className='h-screen p-4 text-white bg-black'>
      <button
        onClick={getData}
        className='bg-green-600 active:scale-95 mb-3  px-5 py-2 rounded text-white '>
        get data
      </button>


      <div className='flex  flex-wrap px-4 gap-4 bg-white'> {printUserdata}</div>
    </div>
  )
}

export default Button
