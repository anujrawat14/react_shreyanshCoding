import React from 'react'
import { ArrowRight } from 'lucide-react';

const Card = (props) => {
    return (
        <div className='relative h-full w-1/3 rounded-3xl shrink-0  overflow-hidden '>
            <img className='h-full w-full object-cover' src={props.image} alt="" />
            <div className='absolute h-full w-full top-0 left-0 p-7 flex flex-col justify-between '>
                <h2 className='h-10 w-10 flex bg-white rounded-full justify-center items-center'>{props.number}</h2>
                <div>
                    <p className='text-lg leading-relaxed pb-10 text-white '>{props.text}</p>
                    <div className='flex justify-between '>
                        <button className='text-white font-medium text-sm  px-4 py-3 rounded-full'
                            style={{ backgroundColor: props.color }}>{props.buttons}</button>
                        <button className='text-white font-medium text-sm  px-4 py-3 rounded-full' ><ArrowRight size={20} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
