import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
// styles
import styles from './Header.module.scss'

const cx = classNames.bind(styles)


const Header = () => (
  <header className={cx('header')}>
    <nav className={cx('nav', 'container')}>
      <ul className={cx('ul')}>
        <li className={cx('li')}>
          <Link to='/'>Home</Link>
        </li>
        <li className={cx('li')}>
          <Link to='/not-found'>NotFound</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
