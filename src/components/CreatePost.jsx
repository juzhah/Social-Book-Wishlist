import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

//Firestore and Auth
import { auth } from "../firebaseConfig";
import BookDataService from "../services/book.service"

import {
  Container,
  Row,
  Form,
  InputGroup,
  Button,
  ButtonGroup,
  Alert,
} from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const CreatePost = () => {
  
  const { isAuth } = useContext(UserContext);


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");

  const [message, setMessage] = useState({ error: false, msg: "" });

  async function hanldeSubmit(e) {
    e.preventDefault();

    setMessage("");

    const newBook = {
      title,
      author,
      link,
      auth: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
    }

    if (title === "" || author === "" || link === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }

    try{
      await BookDataService.addBooks(newBook)
      setMessage({error: false, msg: "Book added succesfully!"})
    }catch(err){
      setMessage({error: true, msg: err.message})
    }

    clearForm();
  }

  function clearForm() {
    setTitle("");
    setAuthor("");
    setLink("");
  }

  if(!isAuth){
    return <Navigate to="/login" />
  }

  return (
    <Container>
      
      {message?.msg && (
        <Alert
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Alert>
      )}
      <Row>
        <h2>Create Post</h2>
      </Row>
      <Row>
        <Form onSubmit={hanldeSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">T</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookLink">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">L</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Link to store"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add Book
            </Button>
            <Button variant="outline-secondary" onClick={clearForm}>
              Clear Form
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default CreatePost;
