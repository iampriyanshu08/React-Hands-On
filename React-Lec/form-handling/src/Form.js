import React, { useState } from "react";
import "../src/Form.css";

const Form = () => {
  const userData = {
    username: "",
    email: "",
    mob: "",
    pass: "",
    confirmPass: "",
  };
  const [user, setuser] = useState(userData);
  const [error, seterror] = useState({});
  const [flag, setflag] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {};
    if (!user.username) {
      // seterror({ username: "please enter a username",});
      newError.username = "please enter a username";
    } else if (user.username.length <= 2 || user.username.length > 10) {
      newError.username = "username must be between 2 and 10 characters";
    }
    if (user.email === "") {
      // seterror({ email: "please enter a email" });
      newError.email = "please enter a email";
    } else if (user.email.indexOf("@") <= 0) {
      newError.email = " '@' invalid position";
    } else if (
      user.email.charAt(user.email.length - 4) != "." &&
      user.email.charAt(user.email.length - 3) != "."
    ) {
      newError.email = " '.' invalid position";
    }
    if (user.mob === "") {
      // seterror({ mob: "please enter mobile number" });
      newError.mob = "please enter mobile number";
    } else if (isNaN(user.mob)) {
      newError.mob = "please enter digits only";
    } else if (user.mob.length < 10) {
      newError.mob = "please enter  10 digit ";
    }
    if (user.pass === "") {
      // seterror({ pass: "please enter a password" });
      newError.pass = "please enter a password";
    } else if (user.pass.length <= 5 || user.pass.length > 15) {
      newError.pass = "password must be between 5 and 15 characters";
    }
    if (user.confirmPass === "") {
      // seterror({ confirmPass: "please enter a confirm password" });
      newError.confirmPass = "please enter a confirm password";
    } else if (user.pass != user.confirmPass) {
      newError.confirmPass = "password not match";
    } else {
      setflag(true);
    }
    seterror(newError);
  };

  return (
    <div>
      {
        <h2>
          {flag ? <p>{user.username} you have registered successfully</p> : ""}
        </h2>
      }

      <div className="form-cont">
        <form onSubmit={handleSubmit}>
          <h1>Instagram</h1>
          <div className="form-grup">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={user.username}
              autoComplete="off"
            />
            <span>{error.username}</span>
          </div>
          <div className="form-grup">
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={user.email}
              autoComplete="off"
            />
            <span>{error.email}</span>
          </div>
          <div className="form-grup">
            <input
              type="text"
              placeholder="Mobile Number"
              name="mob"
              onChange={handleChange}
              value={user.mob}
              autoComplete="off"
            />
            <span>{error.mob}</span>
          </div>
          <div className="form-grup">
            <input
              type="text"
              placeholder="Password"
              name="pass"
              onChange={handleChange}
              value={user.pass}
              autoComplete="off"
            />
            <span>{error.pass}</span>
          </div>
          <div className="form-grup">
            <input
              type="text"
              placeholder="Confirm Password"
              name="confirmPass"
              onChange={handleChange}
              value={user.confirmPass}
              autoComplete="off"
            />
            <span>{error.confirmPass}</span>
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
