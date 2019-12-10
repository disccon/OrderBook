import React from 'react'
import { NavLink } from 'react-router-dom'
// styled
import HeaderStyled from '../../styled/HeaderStyled'


const Header = () => (
  <HeaderStyled>
    <nav className='nav'>
      <ul className='ul'>
        <li className='li'>
          <NavLink exact to='/' activeClassName='selected' className='navLink'>Home</NavLink>
        </li>
        <li className='li'>
          <NavLink exact to='/not-found' activeClassName='selected' className='navLink'>NotFound</NavLink>
        </li>
      </ul>
    </nav>
  </HeaderStyled>
)


export default Header
