import React, { useState } from "react";

const Form = () => {
    const [firstname, setfirstname] = useState("harsh")
    const handlechange = (e)=>{
setfirstname(e.target.value)
    }
  return (
    <div>
      <form >
        <label for="fname">First name:</label>
        <input onChange={handlechange} type="text" id="fname" name="fname" value={firstname} />
      </form>
    </div>
  );
};

export default Form;
