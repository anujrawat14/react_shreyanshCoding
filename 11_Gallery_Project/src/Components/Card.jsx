import React from 'react'

const Card = (props) => {
    return (
        <div  key={props.idx}>

            <a href={props.elem.url} target='_blank'>

                <div
                    className='h-40 w-44 bg-white object-cover overflow-hidden rounded-xl'
                >
                    <img className='h-full w-full' src={props.elem.download_url} alt="" />
                </div>

            </a>

            <h1 className='font-bold text-lg'>{props.elem.author}</h1>

        </div>
    )
}

export default Card
