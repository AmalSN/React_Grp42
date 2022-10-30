import React from 'react'
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom'

const Layout = ({active, setActive, curruser}) => {
  return (
    <div>
        <Navbar active={active} setActive={setActive} curruser={curruser}/>
        <Outlet/> 
    </div>
  )
}

export default Layout