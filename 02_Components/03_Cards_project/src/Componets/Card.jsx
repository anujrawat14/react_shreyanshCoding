import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    //company={company[index]} logo={Logo[index]} role={role[items]} posted={posted[index]} tag1={tag1[index]} tag2={tag2[index]} salary={salary[index]} location={location[index]} saved={saved[index]} applyButton={applyButton[index]}
    return (
        <div className="card">
            <div>

                <div className="top">
                    <img src={props.logo} alt="" />
                    <button> Save <Bookmark size={12} /> </button>
                </div>
                <div className="center">

                    <h3> {props.company}  <span>{props.posted}</span></h3>

                    <h2>{props.role}</h2>

                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2} </h4>
                    </div>

                </div>
            </div>


            <div className="bottom">

                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>

                <button>{props.applyButton} </button>

            </div>

        </div>
    )
}

export default Card
