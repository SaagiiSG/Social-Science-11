import React from 'react'
import { useParams } from 'react-router-dom';
import GradeNav from '../components/gradeNav';
import Header from '../components/header';
import TopicHeader from '../components/TopicHeader';
export const Grade = () => {
  const { gradeId } = useParams();

  const pagesContent = [

    {
      grade:"11",
      topics:[
        {name:"1. НИЙГЭМ, НИЙГМИЙН ХАРИЛЦАА",
        subTopic1:[
              {id:"Нийгмийн давхраажилт"},
              {subtopicName :""},
              {subTopicContect:[{
                                theories:{
                                theory:"",
                                theory:"",
                                theory:"",
                                theory:"",
                                theory:"",
                              },
                                definitions:{
                                  definition1:"",
                                  definition2:"",
                                  definition3:"",
                                  definition4:"",
                                  definition5:"",
                                },
                                pillars:{
                                  pillar1:"",
                                  pillar2:"",
                                  pillar3:"",
                                  pillar3:"",
                                  pillar3:"",
                                }
                              }]}
                            ]
          },
                  {name:"2. Соёл"},]
                 
          },
          
       
  ]
  function SelectedGrade(id){

    id = gradeId;
    const selectedPage = pagesContent.find(pageContent => pageContent.grade == id)
    const selbtnName = selectedPage.topics
    console.log(selbtnName.topics.subTopic1.id);
    
    
    return(
      <section className='text-slate-200 flex flex-col'>
        <Header header={"Social Science"} grade={gradeId}/>  
        
        {/* <TopicHeader btnName={selectedPage.topics.name}/> */}
        <div className='flex flex-col gap-6 px-6 mt-8'>
        {
          selbtnName.map((topic => {
            
            return(
              <TopicHeader btnName={topic.name} id={topic.subTopic1.id} subTopic1={selbtnName} />
              
            )
          }))
        }
        </div>
      </section>
    )
  
  
  
  }
  


  return (
    <div classgrade='text-slate-200'>
      <SelectedGrade/>
    </div>
  )
}
