import React from "react";
import { useState } from "react";

const HandleForm = () => {
    const [formdata, setformdata] = useState({})
  const InputForm = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
   
    let formObj = Object.fromEntries(formData.entries())
    setformdata(formObj)
    console.log(formObj)
  };
  return (
    <div>
      <h1>Add student info</h1>
      <form onSubmit={InputForm}>
        <div>
          <input type="text" name="name" placeholder="add name" />
        </div>
        <div>
          <input type="text" name="branch" placeholder="add branch" />
        </div>
        <div>
          <input
            type="radio"
            placeholder="add name"
            name="gender"
            value="male"
          />{" "}
          Male
          <input
            type="radio"
            placeholder="add name"
            name="gender"
            value="female"
          />{" "}
          female
        </div>
        <div>
          <button type="submit">save</button>
        </div>
        
      </form>
      <div>{JSON.stringify(formdata)}</div>
    </div>
  );
};

export default HandleForm;
