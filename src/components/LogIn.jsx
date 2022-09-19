import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LogIn = () => {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function handleClick(e) {
    console.log("click!");
    setUser(true); 
    navigate('/');
  }

  return (
    <>
      <div>Log In</div>
      <button onClick={handleClick}> Log In </button>
    </>
  );
};

export default LogIn;
