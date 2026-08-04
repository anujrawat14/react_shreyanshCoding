import React from 'react'
import Card from './Card'
// const cardData = [
//     {
//       img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
//       intro: "Helping startups identify and understand their ideal customer segments through market research.",
//       tag: "Market Research"
//     },
//     {
//       img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
//       intro: "Designing modern digital banking experiences that improve customer engagement and trust.",
//       tag: "Digital Banking"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
//       intro: "Using customer insights and analytics to create personalized marketing strategies for growth.",
//       tag: "Customer Insights"
//     }
//   ];
//just for refrence
const Rightcontent = (props) => {
    return (
        <div id="right" className='h-full p-5 overflow-x-auto w-2/3'>
            <div  className='h-full flex gap-4 flex-nowrap'>
                {
                    props.cardData.map((items, index) => (
                        <Card
                            key={index} number={index+1} color={items.color} image={items.img} text={items.intro} buttons={items.tag}

                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Rightcontent
