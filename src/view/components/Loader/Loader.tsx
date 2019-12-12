import React from 'react'
// material
import { CircularProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// styled
import styled from 'styled-components'


const LoaderWrapper = styled.div`
  transform: translateX(-50%);
  top: 400px;
  left: 50%;
  position: absolute;
  width: 66px;
  height: 69px;
  z-index: 99;
  color: '#ff7b08',
`

const ColorCircularProgress = withStyles({
  root: {
    color: '#ff7b08',
  },
})(CircularProgress)


const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorCircularProgress size={60} />
    </LoaderWrapper>
  )
}


export default Loader
