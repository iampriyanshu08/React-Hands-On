import axios from "axios";
import React, { useState } from "react";

const User = () => {
  const [userdata, setuserdata] = useState({ username: "", mobile: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };


  const handleSubmit =(e)=>{
e.preventDefault()
axios.post('https://jsonplaceholder.typicode.com/users',userdata).then((res)=>console.log(res))
  }
  const handleUpdate =(e)=>{
    e.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/users/1',userdata).then((res)=>console.log(res))
  }
  const handleDelete =(e)=>{
    e.preventDefault()
    axios.delete('https://jsonplaceholder.typicode.com/users/1').then((res)=>console.log(res))
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <h1>user Information</h1>
      <form>
        <div>
          username :{" "}
          <input
            type="text"
            name="username"
            value={userdata.username}
            onChange={handleChange}
            placeholder="enter username"
            autoComplete="off"
          />
        </div>
        <div>
          Mobile no :{" "}
          <input
            type="number"
            name="mobile"
            value={userdata.mobile}
            onChange={handleChange}
            placeholder="enter mobile no"
            autoComplete="off"
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          <button type="submit" onClick={handleUpdate}>update</button>
        </div>
        <div>
          <button type="submit" onClick={handleDelete}>delete</button>
        </div>
      </form>
    </div>
  );
};

export default User;
