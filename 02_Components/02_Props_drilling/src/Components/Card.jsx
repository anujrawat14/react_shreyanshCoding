import React from 'react'

//const Card = ({username}) => { //des structure
const Card = (props) => {
    return (

        <div className='card'>
            <img src={props.img} />
            <h1>{props.username}</h1>
            <p>Lorem ipsum, dolor . Beatae, vero..</p>
            <button> View Profile</button>
        </div>

    )
}

export default Card
