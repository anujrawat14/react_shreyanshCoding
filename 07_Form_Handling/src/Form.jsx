   //form handling
import React from 'react'

const Form = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form submitted");
    }

    return (
        <div className='m-5 p-5 text-xl font-bold'>
            <form
                className='flex items-center gap-4'
                onSubmit={(e) => {
                    // e.preventDefault();
                    submitHandler(e)
                }}
            // onSubmit={submitHandler}
            >
                <input
                   
                    className='p-5 text-center  bg-slate-300'
                    type="text" placeholder='Enter Your Name ' />
                <button

                    className='rounded-xl p-5 bg-blue-500 '> Submit</button>
            </form>
        </div>
    )
}

export default Form
