import React from 'react'
import Mypages from '../../Mypages'
import {Outlet} from "react-router-dom"
const Layoutworkpage = () => {
  return (
    <>
        <Mypages/>
        <Outlet/>
    </>
  )
}

export default Layoutworkpage