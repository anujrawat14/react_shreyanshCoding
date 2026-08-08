//two way binding
import React, { useState } from 'react'


const Input = () => {

    const [tittle, setTittle] = useState("")

    const valueChange = (e) => {
        setTittle((prev) => (e))
        // console.log("value changed working");
    }
    return (

        <div className='m-5 p-5 text-xl font-bold'>

            <form className='flex items-center gap-4'
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("form submitted by : ", tittle);
                    setTittle('');//form submit hone k bad input ko khali kr rdiya
                }} >

                <input
                    className='rounded-l p-5 text-center  bg-slate-300'
                    type="text"
                    placeholder='Enter your Name'
                    onChange={(e) => {
                        // console.log("onchange working")
                        valueChange(e.target.value);
                    }}

                    // value="anuj" read kr skat hai type nhi kr skata hai
                    value={tittle}
                // onChange={(e)=>{
                //     console.log("inputing......");
                //     console.log(e.target.value)
                // }}
                />
                <button className='rounded-xl p-5 bg-blue-500'> Submit</button>
            </form>
        </div>

    )
}

export default Input
