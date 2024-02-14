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

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "username") {
      setuser(e.target.value);
    } else if (e.target.name === "email") {
      setuser(e.target.value);
    } else if (e.target.name === "mobileno") {
      setuser(e.target.value);
    } else if (e.target.name === "password") {
      setuser(e.target.value);
    } else {
      setuser(e.target.value);
    }
  };

  return (
    <div>
      <div className="form-cont">
        <form>
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
          </div>
          <div className="form-grup">
            <input
              type="password"
              placeholder="Password"
              name="pass"
              onChange={handleChange}
              value={user.pass}
              autoComplete="off"
            />
          </div>
          <div className="form-grup">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPass"
              onChange={handleChange}
              value={user.confirmPass}
              autoComplete="off"
            />
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
