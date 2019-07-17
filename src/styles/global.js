import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

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
    background-color: #DEDCE1;
    font-family:Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
    margin: 0 0 20px 0;
    border: 2px solid #000;
    padding: 3px 10px;
    font-size: 14px;
    background-color:#fff;
  }

  input, input[type="checkbox" i] {
    margin: 0 0 20px 0;
    border: 2px solid #000;
    padding: 3px 10px;
    font-size: 14px;
    background-color:#fff;
  }
`;

export default GlobalStyle;
