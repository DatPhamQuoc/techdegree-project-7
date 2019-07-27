import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = (props) => {
  return(
      <nav className="main-nav">
        <ul>
          <li><NavLink onClick={()=>props.search('cats')} to='/cats'>Cats</NavLink></li>
          <li><NavLink onClick={()=>props.search('computers')} to='/computers'>Computers</NavLink></li>
          <li><NavLink onClick={()=>props.search('dogs')} to='/dogs'>Dogs</NavLink></li>
        </ul>
      </nav>
  )
}

export default MainNav
