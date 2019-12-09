import React from 'react'
import { Link } from 'react-router-dom'
// styled
import StyledHeader from '../../styled/Header'


const Header = () => (
  <StyledHeader>
    <nav className='nav'>
      <ul className='ul'>
        <li className='li'>
          <Link to='/'>Home</Link>
        </li>
        <li className='li'>
          <Link to='/not-found'>NotFound</Link>
        </li>
      </ul>
    </nav>
  </StyledHeader>
)


export default Header
