import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>AI Layout</h1>
      <Outlet />
    </div>
  )
}

export default Layout
