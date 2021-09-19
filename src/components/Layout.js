import React from "react"
import "normalize.css"
import { createGlobalStyle } from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');

    :root {
      --black: #000;
      --white: #fff;
      --red: #cf2d02;
      --yellow: #edbb3a;
      --grey: #f8f8f8;
    }

    * {
        text-decoration: none;
        margin: 0;
        padding: 0;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
    a {
      color: var(--green);
      text-decoration: none;
    }
    li {
      list-style: none;
    }
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 62.5%;
    }
    body {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        overscroll-behavior: none;
        overflow-x: hidden;
        background-size: cover;
        background-repeat: no-repeat; 
        font-weight: 400;
        color: var(--green);
        font-size: 1.6rem;
        line-height: 1.4;
        background: #fff;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
        padding: 0;
    }
    button {
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        font-size: 1.6rem;
    }
`
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
