import React from 'react'
import { NavLink } from 'react-router-dom'

const Mypages = () => {
  return (
    <div>
        <span>
            Pages:
        </span>
        <NavLink to="/">1</NavLink>
        <NavLink to="">2</NavLink>
        <NavLink to="">3</NavLink>
    </div>
  )
}

export default Mypages