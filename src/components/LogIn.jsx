import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import { provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";

const LogIn = () => {
  const { setIsAuth } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = async () => {

    await signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
      })
      .catch((err) => console.log(err.message));

    setIsAuth(true);
    navigate("/");
  };

  return (
    <>
      <div>Log In</div>
      <button onClick={handleClick}> Log In </button>
    </>
  );
};

export default LogIn;
