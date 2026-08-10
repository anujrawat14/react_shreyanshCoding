import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [data, setData] = useState("");
  const [details, setDetails] = useState("");

  //add krni hai yeah mera card main
  const [task, setTask] = useState([]);
  const img = "https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png"
  const deleteNode = (idx) => {
    const arr1 = [...task];
    arr1.splice(idx, 1);
    setTask(arr1)
  }

  return (
    <div className='lg:flex h-screen bg-black text-white'>

      <form
        className='p-10 flex lg:w-1/2 flex-col items-start gap-4'
        onSubmit={
          (e) => {
            e.preventDefault();
            // console.log(data,details);

            const copyTask = [...task];//copy krenga purana data ko new aray main
            copyTask.push({ data, details })//push krenga new data ko purana ka sath
            setTask(copyTask)//uski value chnage ho jayegi

            setData("");
            setDetails("");
          }
        }
      >

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input className='px-5 w-full font-medium py-2 border-2 outline-none rounded-l'
          type="text" placeholder='Enter Notes Handling'
          onChange={(e) => {
            setData((prev) => (e.target.value))

          }}
          value={data}
        />

        <textarea className='px-5 py-2 h-32 w-full font-medium outline-none border-2 rounded'
          type="text" placeholder='Write Details'
          onChange={(e) => {
            setDetails((prev) => (e.target.value))
          }}
          value={details}
        />

        <button className='active:bg-gray-900 transition-all px-5 py-2 rounded bg-white w-full font-medium text-black outline-none'>
          Add Notes
        </button>

      </form>

      <div className='sm:border-t-2 lg:border-t-0 lg:border-l-2 lg:w-1/2 bg-gray-900 p-10'>

        <h1 className='text-3xl font-bold'>Recent Notes</h1>

        <div className='  flex flex-wrap justify-start gap-5 h-[90%] mt-6 overflow-scroll scrollbar-hide'>

          {/* <div className='h-52 w-40 rounded-2xl bg-white text-black '></div> */}
          {task.map((elem, index) =>

            <div key={index} className='flex justify-between flex-col item-start  pt-6 pb-3 px-4 h-52 w-40 rounded-xl bg-cover text-black '
              style={{ backgroundImage: `url(${img})` }}>
              <div>
                <h1 className='leading-tight text-center p-1.5 text-2xl font-bold '>{elem.data}</h1>
                <p className="pt-1 pl-1.5 text-sm font-medium line-clamp-5 break-words">
                  {elem.details}
                </p>
              </div>
              <button
                onClick={() => {
                  //  deleteNode(index);
                   setTask(task.filter((_, i) => i !== index));
                }}
                className='active:scale-120 bg-red-500 text-xs rounded font-bold text-white w-full '>Delete</button>
              {/* <h2 className='absolute top-5 right-5 bg-red-500 p-1 rounded-full' ><X size={16} strokeWidth={2.75} /></h2> */}

            </div>
          )}



        </div>
      </div>

    </div>
  )
}

export default App