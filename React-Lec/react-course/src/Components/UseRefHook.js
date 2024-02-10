import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [counter, setcounter] = useState(0)
const count = useRef(0)
  // useEffect(() => {
  //   setcounter(counter+1)
  // },[])


  useEffect(() => {
    count.current = count.current+1
  },[counter])
  
  
  // const nameRef = useRef();

  // useEffect(() => {
  //   console.log(nameRef.current);
  //   nameRef.current.innerHTML = "ashu";
  //   nameRef.current.style.backgroundColor = "blue";
  // }, []);

  const handle = ()=>{
    setcounter (counter+1)
  }

  return (
    <div>
      {/* <h1 ref={nameRef}>Hello Priyanshu Utsahi</h1> */}
      <p>CounterRef : {count.current}</p>
      <p> counterState : {counter}</p>
      <button onClick={handle}> click me </button>
      
    </div>
  );
};

export default UseRefHook;


