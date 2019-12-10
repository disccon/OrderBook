import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  html {
    background: #FBFAF8;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-size: 14px;
    color: #1C1C1C;
  }
  
  .container{
    margin-right: auto;
    margin-left: auto;
    width: 1260px;
    display: flex;
    padding-right: 15px;
    padding-left: 15px;
  }
  
  .direction-column {
    flex-direction: column;
  }
`
