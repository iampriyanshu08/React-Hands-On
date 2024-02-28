import React, { useContext } from "react";
import Username from "../Context/Username";

const Child = () => {
  const { user, setUser } = useContext(Username);
  const handleChange = () => {
    setUser("Priyanhsu");
  };

  return (
    <>
      <div>
        <h1>Hey i am Child </h1>
        <p>My name is {user}</p>
        <button onClick={handleChange}>Change name</button>
      </div>
    </>
  );
};

export default Child;
