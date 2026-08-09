import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState("");
  const [details, setDetails] = useState("");

  //add krni hai yeah mera card main
  const [task, setTask] = useState([]);
  // const img = "https://imgs.search.brave.com/jC1Z0tH9LMaOKbFLTQeoV7Pez_FOxReopfAKmH2gv2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVldmV6/eS5jb20vc3lzdGVt/L3Jlc291cmNlcy90/aHVtYm5haWxzLzA0/Mi8wNTQvNzAzL3Nt/YWxsL3BhcGVyLXN0/aWNreS1ub3RlLXBu/Zy5wbmc";
  // const img="https://imgs.search.brave.com/y-RtIbgRZ-CcANAVkPXfNeWS4QHMRqYGmzrKkhC_EMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vcG5nLXBhcGVy/LW5vdGUtc3RpY2tl/ci10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/XzUzODc2LTEwMzAw/NjMuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw";
  const img = "https://imgs.search.brave.com/SnLrlOC0j04AW3Ygq10ql4geY8Y0Gnt5-GsUZdV5vko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L2xlYWZ5LXBhdHRl/cm5lZC1ub3RlLWJh/Y2tncm91bmRfNTM4/NzYtOTc3MzQuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw"
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

        <div className='flex flex-wrap gap-5 h-full mt-6 overflow-auto'>

          {/* <div className='h-52 w-40 rounded-2xl bg-white text-black '></div> */}
          {task.map((elem, index) =>
            <div key={index} className='h-52 w-40 rounded-2xl bg-cover text-black '
              style={{ backgroundImage: `url(${img})` }}>
              <h1 className='leading-tight text-center p-1.5 text-2xl font-bold '>{elem.data}</h1>
              <p className='pt-1 pl-1.5 text-lg font-semibold '>{elem.details}</p>
            </div>
          )}



        </div>
      </div>

    </div>
  )
}

export default App