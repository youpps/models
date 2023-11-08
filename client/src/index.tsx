import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    outline: none;
    box-sizing: border-box!important;
    -ms-overflow-style: none; 
    scrollbar-width: none;
    -webkit-tap-highlight-color: transparent;
  }

  // &::-webkit-scrollbar {
  //   display: none;
  // }

  body, html, #root {
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    font-size: 16px;

    @media(max-width: 1300px) {
      font-size: 14px;
    }

    @media(max-width: 1200px) {
      font-size: 13px;
    }

    @media(max-width: 1100px) {
      font-size: 12px;
    }

    @media(max-width: 1000px) {
      font-size: 11px;
    }

    @media(max-width: 500px) {
      font-size: 10px;
    }

    @media(max-width: 450px) {
      font-size: 9px;
    }

    @media(max-width: 395px) {
      font-size: 16px;
    }

    @media(max-width: 365px) {
      font-size: 15px;
    }

    @media(max-width: 335px) {
      font-size: 14px;
    }
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
