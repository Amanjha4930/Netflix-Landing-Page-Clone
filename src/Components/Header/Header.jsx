import React from 'react'
import logo from '../../logo.png'
import {Link} from "react-router-dom";
import {BiSearchAlt2} from "react-icons/bi"

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />

        <div>
            <Link to="/" >TV Shows</Link>
            <Link to="/" >Movies</Link>
            <Link to="/" >Recently Added</Link>
            <Link to="/" >My List</Link>
        </div>

        <BiSearchAlt2 />

    </nav>
  )
}

export default Header
