import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Component/NavBar' 

function Root() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
     <NavBar />
      <Outlet /> 
    </div>
  )
}

export default Root
