import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
  }

  body {
    background: var(--background);
  }

  :root {
    --orange: #F28907;  
    --orange2: #FDA704;
    --orange3: #F2B807; 
    --red: #F21B07;
    --green: #D2D907; // #C8E205
    --grey: rgba(236, 236, 236, 0.6);
    --background: rgba(250, 250, 250, 1);
    --svg: rgba(0, 0, 0, 0.8);
  }

  .section {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 25px;
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    z-index: 1000;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* background: #f1f1f1; */

    background: transparent;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: #888; */
    background: transparent;
    border-radius: 10px;
  }
`

export default GlobalStyle

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
`