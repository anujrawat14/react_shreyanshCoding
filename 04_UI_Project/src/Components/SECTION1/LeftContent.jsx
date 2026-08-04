import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3 '>
            <div>
                <h3 className='text-2xl   font-bold pl-2 pt-4'>Prospective<br />Customer <br /> Segmentation</h3>
                <div className=' pl-2  pr-1 text-l mt-4 font-semibold'>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eveniet ea? Doloribus hic obcaecati voluptatem perferendis dolorem pariatur, quaerat vitae?
                </div>

            </div>
            <div>

                <ArrowUpRight size={44} />
            </div>


        </div>
    )
}

export default LeftContent
