import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderContainer } from './header.style'

const Header = () => {
  return (
    <HeaderContainer className='header bg-dark'>
      <nav className='navbar navbar-expand-lg navbar-light header-nav'>
        <Link className='navbar-brand text-warning' to='/'>
          React-Redux-Hook
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link text-light' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link text-light' to='/about-us'>
                About Us
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link text-light' to='/contact-us'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderContainer>
  )
}

export default Header
