import React from "react";
import { useState } from "react";

const ControlledForm = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const handlechange = (e) => {
    e.preventDefault();
    if (e.target.name === "firstname") {
      setfirstname(e.target.value);
    } else if (e.target.name === "lastname") {
      setlastname(e.target.value);
    } else {
      setpassword(e.target.value);
    }

    // setfirstname(e.target.name.value)
    // setlastname(e.target.name.value)
    // setpassword(e.target.name.value)
    console.log(e.target.name);
  };

  return (
    <div>
      <h1>react form controlled component react handles this</h1>
      <form action="">
        <label htmlFor="firstname">FirstName:</label>
        <input
          onChange={handlechange}
          type="text"
          name="firstname"
          value={firstname}
        />
        <label htmlFor="lastname">LastName:</label>
        <input
          onChange={handlechange}
          type="text"
          name="lastname"
          value={lastname}
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={handlechange}
          type="text"
          name="password"
          value={password}
        />
      </form>
    </div>
  );
};

export default ControlledForm;
