import { React, useState } from "react";

const Hooks = () => {
  const [counter,setCounter] = useState(5);
  const [name,setName] = useState(false);
 
  const increment = ()=>{
   setCounter(counter+1)
    console.log(counter);
  }
  const decrement = ()=>{
    return counter>0?setCounter(counter-1):counter
   
    
  }
  const change = ()=>{
 
      return setName(!name)
   
   
    
  }
  const change1 = ()=>{
   
//    setName("priyanhsu")
   
    
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{name ? "ashu":"priyanhsu"}</h1>
      <h2>Number : {counter}</h2>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>subtract</button>
      <button onClick={change} >change me</button>
      <button onClick={change1} >change again</button>
    </div>
  );
};

export default Hooks;
