import { Outlet } from "react-router-dom";

//firebase
//import { googleSignIn } from "./firebaseConfig"

//components
import Navigation from './components/Navigation'

//styles / react-bootstrap
import { Container, Row } from "react-bootstrap";


function App() {

  return (
    <Container className="postition-realtive">
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
