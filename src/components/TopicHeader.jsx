import React from 'react'
import {Link} from 'react-router-dom'
const TopicHeader = (props) => {
  return (
    <Link key={props.id} to={props.subTopicID} className='rounded-xl p-4 grid items-center btn_color w-full hover:scale-[1.02] duration-300 text-[20px]'>
        {props.btnName}
    </Link>
  )
}

export default TopicHeader