import React from 'react'
import styled from 'styled-components'

const NotFound = styled.div`
  .h1{
    margin-top: 300px;
    margin-right: auto;
    margin-left: auto;
    font-size: 25px;
    font-weight: 500;
  }
`

const NotFoundPage = () => (
  <NotFound className='container'>
    <h1 className='h1'>NodFound 404!</h1>
  </NotFound>
)


export default NotFoundPage
