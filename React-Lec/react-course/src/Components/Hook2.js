import React, { useState } from "react";

const Hook2 = () => {
  const number = [1, 4, 7, 5];
  const [num, setNum] = useState(number);
  const [obj, setObj] = useState([
    { name: "harsh", age: 23 },
    { name: "sakir", age: 19 },
    { name: "rajesh", age: 89 },
    { name: "mukul", age: 23 },
  ]);
  const [data, setdata] = useState(true)

  const handle = () => {
    // setObj([{obj[0].name = "ashu"}])
    setdata(!data)
  };
  return (
    <>
      <div>
        <h1>here are some numbers : {num}</h1>
        <h1>
          {/* My name is : {obj[0].name} and my age is : {obj[0].age} */}
          {obj.map((elem) => {
            return (
              <h1>
                {/* my name is {elem.name} and my age is {elem.age} */}
              </h1>
            );
          })}
        </h1>
        <h2>{data?"Priyanshu":"Ashu"}</h2>
        <button onClick={handle}>click me </button>
      </div>
    </>
  );
};
export default Hook2;
