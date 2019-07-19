import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import 'typeface-source-sans-pro';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: #FCFCFD;
    font-family:'Source Sans Pro', Arial, Helvetica, sans-serif;
    font-size:20px;
    color: #170C3A;
  }

  button{
    border:none;
    cursor: pointer;
    max-width:250px;
    min-width:174PX;
    font-family:'Source Sans Pro', Arial, Helvetica, sans-serif;
    line-height:24px;
    font-weight:600;
    margin: 5px;
    padding: 10px 26px;
    font-size: 18px;
    border-radius: 5px;
    background-color: #365DF0;
    color:#fff;
    &:hover{
      background-color: #2F55CC;
    }
    &:active{
      background-color:#244AA8;
    }
  }


  input, textarea {
    margin: 0 0 20px 0;
    border: 1px solid #EBEAED;
    border-radius:5px;
    padding: 12.5px 12.5px;
    font-size: 14px;
    background-color: #F5F4F6;
    color: #B1ADB9;
    font-size: 20px;
    &:focus{
      background-color: #EBEAED;
      color: #170C3A;
    }
  }

  i{
    margin-right: 5px;
  }

  h1, h2, h3{
    font-weight: 400;
    margin-bottom:5px;
  }

  h1{
    font-size: 42px;
    line-height: 50px;

  }
  h2{
    font-size: 36px;
    line-height: 40px;
  }
  h3{
    font-size: 30px;
    line-height: 36px;
    a{
      text-decoration: none;
      color: #000;
    }
  }
  /* Checkbox configuration */

  input[type=checkbox] {
    margin:10px;
  }

  .headerModal{
    display:flex;
    align-items: center;
    img{
      margin-right: 15px;
    }

  }

`;

export default GlobalStyle;
