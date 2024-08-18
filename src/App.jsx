import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./global.css"
import Header from './components/header'
import GradeNav from './components/gradeNav'
import { Grade } from './pages/Grade'
import Main from './pages/main'
import TopicPage from './pages/topicPage'
function App() {
 

  return (
    <main className='w-[100vw] h-[100vh] '>
    
      <BrowserRouter>
      <GradeNav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/grade/:gradeId' element={<Grade/>}/>
          <Route path='/grade/:gradeId/:topicId' element={<TopicPage/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
