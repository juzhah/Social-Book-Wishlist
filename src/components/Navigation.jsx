import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Button, Nav } from "react-bootstrap";

import { UserContext } from "../context/UserContext";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  function logUserOut() {
    setUser(false);
  }

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              alt=""
              src="/books.svg"
              width="45"
              height="45"
              className="d-inline-block align-center"
            />{" "}
            Book Whishlist
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!user ? (
            <Nav>
              <Nav.Link>
                <Link to={"/login"}>Log In</Link>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link to={"/createpost"}>create a post</Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <div variant="outline-dark" onClick={logUserOut}>
                  Log Out
                </div>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
