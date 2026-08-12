//useEffect perform side effects in a component after React has rendered it, based on specified dependencies.
import React, { useEffect, useState } from 'react'

const App = () => {


  //syntax has a function,dependency array if i dont give any array it will call each time useEffect(function(),[dependency array])
  //it is also used when we want to run a function and we don't called it so we give dependency if it changes this function runs
  // useEffect(() => {
  //   console.log("use efecet called :", Math.random());
  // })//it will run at every render as arrray is not given

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10)

  useEffect(() => {
    console.log("use effect running")
  }, [count2])

  return (
    <div>
      <div>value of count is {count}</div>
      <div>value of count2 is {count2}</div>
      <button
        onDoubleClick={() => setCount2((prev) => (prev + 100))}
        onClick={() => setCount((prev) => (prev + 1))}>Click</button>
    </div>

  )
}

export default App