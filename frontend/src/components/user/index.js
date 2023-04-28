import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Toolbar from './Toolbar'

const User = () => {
  return (
    <div>
      <Navbar/>
    {/* <Toolbar/> */}
      <Outlet />
    </div>
  )
}

export default User