import React, { useState } from 'react'
import axios from "axios";

const App = () => {

  //there are two methods for api calling fetch and exio (its third party api)


  // function getData() {
  //   const response = fetch("https://jsonplaceholder.typicode.com/todos/1'")
  //   console.log("data aa gya");
  //   console.log(response);//promise ki form main data agya
  // }

  //we make this function as asynchronus so we use await
  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(response)
  // }
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   // console.log(response.json()); yeah bhi asynchronus hai
  //   const data = await response.json();
  //   console.log(data);
  // }


  //with the help of axios
  // const getData = async () => {
  //   // const response= await axios.get('https://jsonplaceholder.typicode.com/users')
  //   // console.log(response)
  //   // console.log(response.data)//.json method is not used

  //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users') //using destructure
  //   console.log(data);

  // //    const {data2} = await fetch('https://jsonplaceholder.typicode.com/users')
  // //  console.log(data2) this will not work ------

  // }

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    // setData(([data])=>(response.data))
    setData([...data,... response.data]);
  }
  const [data, setData] = useState([])
  return (
    <div>
      <button
        onClick={getData}
      > Get Data</button>

      {
        data.map((elem, idx) => (<div key={idx}>The name of author is : {elem.author},with key {idx}</div>))
      }
    </div>
  )
}

export default App