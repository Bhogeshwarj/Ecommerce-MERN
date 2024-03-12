import React from 'react'
import { FaSearch, FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>About
        <FaSearch />
        </Link>
        <Link to={"/cart"}>Cart
        <FaShoppingBag />
        </Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
     
    </nav>
  )
}

export default Header