import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    //special hook jo react dom provide krta hai 
    const params= useParams();
    console.log(params);
    
  return (
    <div>
      <h1 className=' heading  !whitespace-normal'>Course detail page is of : {params.id}</h1>
    </div>
  )
}

export default CourseDetail
