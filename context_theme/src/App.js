import React, {useState} from "react"

import './App.css';
import Container from "./Container"
import Main from "./Main"
import Footer from "./Footer"
import Button from "./Button"
import {ThemeContextProvider} from "./themeContext"

function App() {
  return (
    <>
      <ThemeContextProvider>
          <Container />
          <Main />
          <Footer />
          <Button />
      </ThemeContextProvider>
    </>

  );
}

export default App;
