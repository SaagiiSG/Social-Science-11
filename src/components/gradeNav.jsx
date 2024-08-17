import React from 'react'
import { Link }from 'react-router-dom'


const GradeNav = () => {
    const btnNames =[
        {   name:"12th grade", pathName:"grade/12", id:0  },
        {   name:"11th grade", pathName:"grade/11", id:1 },
        {   name:"10th grade", pathName:"grade/10", id:2  },
        {   name:"9th grade", pathName:"grade/9", id:3 },
        {   name:"8th grade", pathName:"grade/8"  , id:4},
        {   name:"7th grade", pathName:"grade/7"  , id:5},
        {   name:"6th grade", pathName:"grade/6"  , id:6},
    ]
    return (
    <nav className='w-screen h-auto flex gap-4 pl-[24px] overflow-auto py-4'>
        {btnNames.map((btn=>{
            return(
                <Link key={btn.id} to={btn.pathName} className='w-auto font-[16px] px-[24px] py-[4px] rounded-full bg-slate-600 text-[#d9d9d9] text-nowrap hover:bg-slate-500'>{btn.name}</Link>
            )
        }))}
    </nav>
  )
}
export default GradeNav