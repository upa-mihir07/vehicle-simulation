import React, { useState } from 'react'
import {  Link, NavLink } from "react-router-dom";

import './navComp.css';

function NavComp() {
  const [act, setAct] = useState(1)
  return (
    <nav>
        <div className='nav_container'>
          <NavLink style={{textDecoration: 'none'}} className={({ isActive }) => {
            if (isActive) {
              setAct(1)
            }
            return (isActive ? 'active' : 'inactive')}} to="/">
            <div className={act === 1 ? 'active_div' : 'inactive_div'}>
              Home
            </div>
          </NavLink>
          <NavLink style={{textDecoration: 'none'}} className={({ isActive }) => {
            if (isActive) {
              setAct(2)
            }
            return (isActive ? 'active' : 'inactive')}} to="/scenario/add">
            <div className={act === 2 ? 'active_div' : 'inactive_div'}>
              Add Scenario
            </div>
          </NavLink>
          <NavLink style={{textDecoration: 'none'}} className={({ isActive }) => {
            if (isActive) {
              setAct(3)
            }
            return (isActive ? 'active' : 'inactive')}} end to="/scenario">
            <div className={act === 3 ? 'active_div' : 'inactive_div'}>
              All Scenario
            </div>
          </NavLink>
          <NavLink style={{textDecoration: 'none'}} className={({ isActive }) => {
            if (isActive) {
              setAct(4)
            }
            return (isActive ? 'active' : 'inactive')}} to="/vehicle/add">
            <div className={act === 4 ? 'active_div' : 'inactive_div'}>
              Add Vehicle
            </div>
          </NavLink>
        </div>
    </nav>
  )
}

export default NavComp