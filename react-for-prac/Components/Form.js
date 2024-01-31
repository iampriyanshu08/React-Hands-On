import React, { useState } from "react";

const Form = () => {
  const [username, setusername] = useState("");
  return (
    <div>
      <form className="mt-5">
        <h1 className="inline">Name : </h1>
        <input
          type="text"
          className=" border border-zinc-500 rounded px-4 py-2"
          value={username}
          placeholder="Enter your name here"
          onChange={(e)=>{
           
            setusername(e.target.value);
           
          }}
        />
      </form>
      <h1>the name is {username}</h1>
    </div>
  );
};

export default Form;

//Two way binding
