"use client";
import React, { useState } from "react";

const page = () => {
  const userdata = { title: "", desc: "" };
  const [user, setuser] = useState(userdata);
  const [task, settask] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    settask([...task, { title: user.title, desc: user.desc }]);
    console.log(task);

    console.log(user.title);
    console.log(user.desc);

    setuser({ title: "", desc: "" });
  };

  const handleDelete = (i) =>{
console.log("btn clicked")
let copytask = [...task]
copytask.splice(i,1)
settask(copytask)
  }
  let renderTask = <h1>No tasks Available</h1>;

  task.length>0? renderTask = task.map((t,i)=>(
    <li key={i}  className="flex items-center justify-around">
      <div className="flex items-center justify-around  w-2/3">
      <h5 className="text-xl font-semibold"> title: {t.title}</h5>
      <h6 className="text-lg font-semibold"> desc : {t.desc}</h6>
     
    </div>
    <button onClick={()=>handleDelete(i)} className="bg-red-700 text-white px-4 py-2 mt-2 rounded font-bold text-xl">delete</button>
   
    </li>
  )) :null
  return (
    <>
      <div className="text-center ">
        <h1 className="text-5xl mt-5 font-bold text-yellow-500">
          Priyanshu TodoList
        </h1>
        <form className="mt-5 text-2xl" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={user.title}
            onChange={handleChange}
            placeholder="enter title here"
            className="border-zinc-800 border-2  px-4 py-2  m-8"
            autoComplete="off"
          />
          <input
            type="text"
            name="desc"
            value={user.desc}
            onChange={handleChange}
            placeholder="enter description"
            className="border-zinc-800 border-2  px-4 py-2  m-8"
            autoComplete="off"
          />
          <button className="px-5 py-2 bg-yellow-500 text-black font-bold border-none rounded m-5">
            add task
          </button>
        </form>
        <hr />
        <div className="p-8 bg-yellow-500">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
