import React from 'react'

const App = () => {
  // const clickFun = () => {
  //   console.log("clicked button")
  // }
  // const dubClickFun = () => {
  //   console.log("double clicked button")
  // }
  // const mouseEnter = () => {
  //   console.log("mouse entered")
  // }

  // function inputChanging(e) {
  //   console.log(e);
  // }

  const pageScroll = (x) => {
    // console.log("page scrolling speed : "+x)
    if(x>0){
      console.log("downward scrolling")
    }
    else{
      console.log("upward scrolling")
    }
  }
  return (
    <div>

      {/* <div>
        <button
          onClick={clickFun} onDoubleClick={dubClickFun} onMouseEnter={mouseEnter}
          onClick={() => {
            console.log("clicked button")
          }}
          style={{ backgroundColor: 'blue' }}
        > Click me</button>
       </div> */}

      {/* <div>
        <input type="text"
          placeholder='name'
          //onClick={()=>console.log("clicked krna par ")}
          // onChange={() => console.log("value chng krna par")}
          onChange={(e) => {
            // console.log(e.nativeEvent.data); currently konsa elemnt dal hai
            // console.log(e.target); kispa target kr rha
            // console.log(e.target.value)
            inputChanging(e.target.value)
          }}
          style={{ border: "2px solid red", margin: "10px", padding: "10px 20px" }}
        />
      </div> */}

      {/* <div className='box'
        onMouseMove={(e) => {
          console.log("value of x axis :" + e.clientX)
          console.log("value of y axis :" + e.clientY)
        }}
        style={{ height: "200px", width: "200px ", backgroundColor: "white", border: "2px", marginLeft: "50px", marginTop: "30px", padding: "5px 5px" }}>

      </div> */}

      <div className="pages"
        onWheel={(e) => {
          //console.log(e.deltaY)//speed of movement for mouse its always constant for touchpad it varies
           pageScroll(e.deltaY)
          }}>
        <div className="page1" style={{ height: "100vh", width: "100%", backgroundColor: "red" }}></div>
        <div className="page2" style={{ height: "100vh", width: "100%", backgroundColor: "blue" }} ></div>
        <div className="page3" style={{ height: "100vh", width: "100%", backgroundColor: "green" }}></div>
      </div >
    </div >
  )
}
export default App
