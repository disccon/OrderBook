import styled from 'styled-components'


export default styled.header`
  height: 60px;
  background: black;
  .nav {
    height: 100%;
    .ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .li {
        margin-right: 30px;
        color: #fff;
        font: 700 17px "Dikovina", tahoma, Helvetica, sans-serif;
      }
    }
  }    
`
