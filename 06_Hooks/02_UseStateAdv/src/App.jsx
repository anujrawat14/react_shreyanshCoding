import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0);
  // const [user, setUser] = useState({ userName: "sarthak", age: 20 })
  const [arr, setArr] = useState([10, 20, 30]);


  // const bttnClick = () => {
  //   console.log(num);
  //   setNum(num + 1);//this is an asynchronus function
  //   console.log(num);

  // }






  return (
    <div >
      {/* <div className='relative '>

        <h1
          className=' relative px-35 pt-35  h-100 w-100 text-7xl left-1/3 text-white bg-black rounded-l '>{num}</h1>
        <button
          className='relative left-1/3 p-2 ml-25 mt-10 h-10 w-30  uppercase font-bold text-xl rounded-xl bg-blue-300'
          onClick={bttnClick}
        // onClick={() => (
        //   setNum((prev) => (prev + 1))
        // ) }
        > Click me</button>

      </div> */}

      {/* <div>

        <h1
          className=' relative px-15 pt-35  h-100 w-200 text-7xl left-1/3 text-white bg-black rounded-l '> {user.userName} is {user.age} year old</h1>
        <button
          className='relative left-1/3 p-2 ml-25 mt-10 h-10 w-30  uppercase font-bold text-xl rounded-xl bg-blue-300'

          onClick={
            () =>
            //important :- The useState setter replaces the entire state object; it does not merge properties automatically. When updating only one or a few properties, use the spread operator (...) to copy the existing object and change only the required fields.
            {
              const user2 = { ...user };
              user2.userName = "anuj";
              // user2.age = 22;//it use previous value of age
              // setUser(user2)
              //setUser((prev)=>({...prev,username="anuj" }))
            }
            // setUser(
            //   {
            //     userName: "anuj",
            //     // age: 22 it make age undefined
            //   }
            // )

          }
        > Click me</button>
      </div> */}


      <div>

        <h1
          className=' relative px-15 pt-35  h-100 w-200 text-7xl left-1/3 text-white bg-black rounded-l '> {arr.map((n, i) => (<span key={i}>{n} </span>))} </h1>
        <button
          className='relative left-1/3 p-2 ml-25 mt-10 h-10 w-30  uppercase font-bold text-xl rounded-xl bg-blue-300'

          // onClick={(() => (
          //   setArr([10])
          // ))}

          onClick={() => {
            // Add a new element (preserve old array)
            // const newArr = [...arr];
            // newArr.push(50);
            // setArr(newArr);
            setArr((prev)=>([...prev, 50]))//push array 
          }}
        > Click me</button>
      </div>
    </div >
  )
}

export default App
