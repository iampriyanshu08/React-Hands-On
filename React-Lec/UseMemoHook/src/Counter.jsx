import React, {  useMemo, useState } from "react";

const Counter = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const handleCount1 = () => {
    setcount1(count1 + 1);
  };
  const handleCount2 = () => {
    setcount2(count2 + 1);
  };
  const iseven = useMemo(() => {
    for (let i = 0; i < 2000000000; i++);
     return count1 % 2 === 0
  },[count1])

  return (
    <div>
      <h1>UseMemo Hook</h1>

      <button onClick={handleCount1}> count1 - {count1}</button>
      <span>{iseven ? "even" : "odd"}</span>
      <div><button onClick={handleCount2}> count2 - {count2}</button></div>
    </div>
  );
};

export default Counter;
