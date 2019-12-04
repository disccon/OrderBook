import React from 'react'
import classNames from 'classnames/bind'
// styles
import styles from './NotFoundPage.module.scss'

const cx = classNames.bind(styles)


const NotFoundPage = () => (
  <div className={cx('container')}>
    <h1 className={cx('h1')}>NodFound 404!</h1>
  </div>
)

export default NotFoundPage
