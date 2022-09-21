import React, { useContext, useState, useEffect } from "react";

import { Table, Container } from "react-bootstrap";

import { UserContext } from "../context/UserContext";

import { useNavigate } from "react-router-dom";

import BookDataService from "../services/book.service"

import { auth } from "../firebaseConfig";



const Dashboard = () => {
  const [bookList, setBookList]= useState([]);
  const [bookId, setBookId] =useState('');

  const { isAuth } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    getBooks();
  }, [])
  
  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    setBookList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  }

  const editBookHandler = (id) => {
    navigate(`updatepost/${id}`)
  }

  const deleteBookHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  }

  return (
    <Container>
      <h1>List of books</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>link</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td><a href={doc.link} target="_blank">store</a></td>
                <td>{doc.auth.name}</td>
                {isAuth && doc.auth.id === auth.currentUser.uid && (
                  <td>
                    <button onClick={() => editBookHandler(doc.id)}>edit</button>
                    <button onClick={() => deleteBookHandler(doc.id)}>delete</button>
                  </td>
                )}
              </tr>
              )
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
