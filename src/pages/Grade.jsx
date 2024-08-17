import React from 'react'
import { useParams } from 'react-router-dom';
import Logo from "../assets/logo.svg"
import Header from '../components/header';
export const Grade = () => {
  const { gradeId } = useParams();

  const pagesContent = [
    {
      grade:"12",
      topic:"dfghjkl"
    },
    {
      grade:"11",
      topics:{
          name:"1. Нийгмийн давхраажилт"
      }
      
    },
    {
      grade:"10",
      topics:{
        name:"1. 10 Нийгмийн давхраажилт"
    }
    },
    {
      grade:"9"
    },
    {
      grade:"8"
    },
    {
      grade:"7"
    },
    {
      grade:"6"
    },
  ]
  function SelectedGrade(id){

    id = gradeId;
    const selectedPage = pagesContent.find(pageContent => pageContent.grade == id)
    return(
      <section className='text-slate-200 flex flex-col'>
        <Header header={"Social Science 11"}/>  
        <div>{selectedPage.grade}</div>
        <div>{selectedPage.topics.name}</div>
      </section>
    )
  
  
  
  }
  


  return (
    <div classgrade='text-slate-200'>
      <SelectedGrade/>
    </div>
  )
}
