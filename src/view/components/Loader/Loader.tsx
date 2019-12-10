import React from 'react'
// styled
import styled from 'styled-components'
// gif
import preloaderGif from '../../../assets/gifs/loader.gif'


const LoaderImg = styled.img`
  transform: translateX(-50%);
  top: 400px;
  left: 50%;
  position: absolute;
  width: 66px;
  height: 69px;
  z-index: 99;
`


const Loader = () => (
  <LoaderImg src={preloaderGif} alt='' />
)


export default Loader
