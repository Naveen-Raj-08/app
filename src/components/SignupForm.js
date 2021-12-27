import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { appStore } from "../firebase/config";

export const SignupForm = () => {
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [Password, setPassword] = useState(null);
  const [ConfirmPassword, setConfirmPassword] = useState(null);
  const [Error, setError] = useState(false);

  const navigate = useNavigate();

  const handleUsername = (e) => {
    let name = e.target.value;
    if (name) {
      setName(name.trim());
    }
  };

  const handleEmail = (e) => {
    let email = e.target.value;
    if (email) {
      setEmail(email.trim());
    }
  };

  const handlePassword = (e) => {
    let password = e.target.value;
    if (password) {
      setPassword(password.trim());
    }
  };

  const handleConfirmPassword = (e) => {
    let confirmPWD = e.target.value;
    if (confirmPWD) {
      setConfirmPassword(confirmPWD.trim());
    }
  };
  const handlePhoneNumber = (e) => {
    let phone = e.target.value;
    if (phone) {
      setPhone(phone.trim());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createCollection = appStore.collection("user");

    if (Password === null || ConfirmPassword === null || Phone === null) {
      setError(true);
    } else {
      if (Password === ConfirmPassword) {
        setError(false);
        const user = {
          Username: Name,
          Usermail: Email,
          Userpassword: Password,
          Userconfirmpassword: ConfirmPassword,
        };
        console.log(user);
        createCollection.add(user);
        setTimeout(() => {
          e.target.reset();
          setName("");
          setPhone("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          navigate("/login");
        }, 2000);
      } else {
        setError(true);
      }
    }
  };

  return (
    <div className="submission__form ">
      <form className="card" onSubmit={handleSubmit}>
        <h4 className="form__title">Sign Up</h4>
        <fieldset className="fieldset">
          {Error === true ? (
            <span className="form__error">Please check your details</span>
          ) : null}
          <input type="text" placeholder="Username" onChange={handleUsername} />

          <input type="email" placeholder="Email" onChange={handleEmail} />
          <input
            type="tel"
            placeholder="Phone Number"
            onChange={handlePhoneNumber}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleConfirmPassword}
          />
          <p className="already__user">
            if you're already have an account
            <Link to="/login">Login</Link>
          </p>
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </fieldset>
      </form>
    </div>
  );
};
