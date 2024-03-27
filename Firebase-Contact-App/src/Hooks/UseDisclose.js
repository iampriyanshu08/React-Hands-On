import React, { useState } from "react";

const UseDisclose = () => {
  const [isopen, setisopen] = useState(false);

  const OnOpen = () => {
    setisopen(true);
  };
  const OnClose = () => {
    setisopen(false);
  };
  return {OnClose,OnOpen,isopen};
};

export default UseDisclose;
