import React from 'react'
import LeftContent from './LeftContent'
import Rightcontent from './Rightcontent'

const Content = (props) => {
    return (
        <div className="flex h-[calc(100vh-5rem)] ">
            <LeftContent />
            <Rightcontent cardData={props.cardData} />
        </div>
    )
}

export default Content
