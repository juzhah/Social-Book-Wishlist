import { Outlet } from "react-router-dom";

//firebase
//import { googleSignIn } from "./firebaseConfig"

//components
import Navigation from './components/Navigation'

//styles / react-bootstrap
import './App.css'
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

import { auth } from "./firebaseConfig";


function App() {
  return (
    <Container>
      <Row>
        <Navigation/>
      </Row>
      <Row>
        <Outlet/>
      </Row>
    </Container>
  )
}

export default App
