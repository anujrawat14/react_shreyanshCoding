import React, { useState } from 'react'
import Counter from './Counter'

const App = () => {

  // const [a, seta] = useState(20);

  // function changeValue() {
  //   seta(a++);
  // }

  // without use state value change nhi hogi
  // let a = 20;
  // const changeValue = () => {
  //   console.log(a);
  //   a++;
  //   console.log(a);

  // }
  return (
    <div>
      {/* <h1> Value of a is: {a}</h1>
      <button
        onClick={changeValue}>Click</button> */}
      <Counter />
    </div>
  )
}

export default App
