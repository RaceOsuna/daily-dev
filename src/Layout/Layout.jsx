import React from 'react'
import { Outlet, NavLink} from 'react-router-dom'
// import { useState } from 'react'
import './Layout.css'
// import { data } from '../mockData'


function Layout({news}) {


  return (
    <div>
      <header>
        <h1>Daily Dev</h1>
        <div className='header-links'>
          <NavLink to='/'>Top Stories</NavLink>
          <NavLink>Sources</NavLink>
          <NavLink>All News</NavLink>
        </div>
      </header>
      <main>
        <Outlet context={{news}} />
      </main>
    </div>
  )
}

export default Layout
