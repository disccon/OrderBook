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
        font: 700 17px "Dikovina", tahoma, Helvetica, sans-serif;
        .navLink  {
          color: #fff;
          transition: color ease-out .2s;
        }
        .navLink.selected {
          color: #ffa700;
          transition: color ease-out .2s;
        }
      }
    }
  }    
`
