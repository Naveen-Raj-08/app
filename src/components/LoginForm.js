import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appStore } from "../firebase/config";

export const LoginForm = () => {
  const [Name, setName] = useState(null);
  const [UserName, setUsername] = useState(null);
  const [UserPassowrd, setUserPassowrd] = useState(null);
  const [Password, setPassowrd] = useState(null);
  const [Error, setError] = useState(null);
  const [UserData, setUserData] = useState([]);
  const [NullError, setNullError] = useState(null);

  //   (() => {
  //     appStore
  //       .collection("user")
  //       .get()
  //       .then((snapshot) => {
  //         let userData = [];
  //         snapshot.forEach((doc) => {
  //           const data = doc.data();
  //           userData.push(data);
  //         });
  //         setUserData(userData);
  //         UserData.map((data) => {
  //           setName(data.Username);
  //           setPassowrd(data.Userpassword);
  //         });
  //       });
  //     console.log("Inside");
  //     console.log(UserData);
  //   });

  const handleUserEmail = (e) => {
    let name = e.target.value;
    if (name) {
      setUsername(name);
    }
  };
  const handleUserPassword = (e) => {
    let password = e.target.value;
    if (password) {
      setUserPassowrd(password);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(Name + Password);

    if (UserData.length === 0) {
      setError("Please check the email/password");
    } else {
      if (UserName === null && UserPassowrd === null) {
        setNullError(true);
        setError(null);
      } else {
        setNullError(null);
        if (UserName === Name && UserPassowrd === Password) {
          console.log("Login Success..!");
        } else {
          setError("Invalid email/password");
        }
      }
    }
  };

  return (
    <div className="submission__form">
      <form className="card" onSubmit={handleFormSubmit}>
        <h4 className="form__title">Login</h4>
        <fieldset className="fieldset">
          <input type="text" placeholder="Email" onChange={handleUserEmail} />
          <input
            type="password"
            placeholder="Password"
            onChange={handleUserPassword}
          />

          <p className="already__user">
            if you don't have an account just<Link to="/signup">Sign Up</Link>
          </p>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
};
