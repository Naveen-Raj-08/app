import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appStore } from "../firebase/config";

export const LoginForm = () => {
  const [Mail, setUserMail] = useState(null);
  const [UserName, setUsername] = useState(null);
  const [UserPassowrd, setUserPassowrd] = useState(null);
  const [Password, setPassowrd] = useState(null);
  const [Error, setError] = useState(null);
  const [UserData, setUserData] = useState([]);
  const [NullError, setNullError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Data fetching....");
      await appStore
        .collection("user")
        .get()
        .then((snap) => {
          let data = [];
          snap.docs.map((doc) => {
            data.push(doc.data());
          });
          setUserData(data);
          console.log(UserData);
          console.log("Data got...");
        });
    };

    fetchData();

    UserData.map((data) => {
      setUserMail(data.Usermail);
      setPassowrd(data.Userpassword);
      console.log(Mail + Password);
    });

    return () => fetchData();
  }, [UserData]);

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
    const createCollection = appStore.collection("isAuth");
    console.log(Mail + Password);

    if (UserData.length === 0) {
      setError("Please check the email/password");
      console.log("Length 0");
    } else {
      if (UserName === null && UserPassowrd === null) {
        setNullError(true);
        setError(null);
        console.log("User has no value");
      } else {
        setNullError(null);
        if (UserName === Mail && UserPassowrd === Password) {
          console.log("Login Success..!");
          navigate("/home");
          createCollection.add({ isLogin: true });
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
