import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";
const API = "https://jsonplaceholder.typicode.com";

const App = () => {
  const [user, setuser] = useState([]);
  const [error, seterror] = useState("");

  const fetchdata = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setuser(response.data);
    } catch (err) {
      console.log(err);
      seterror(err.message);
    }
  };
  useEffect(() => {
    fetchdata(`${API}/users`);
  }, []);

  return (
    <>
      <User/>
    </>
  );
};

export default App;






// {/* <div className="w-full  flex justify-center items-center">
//         {/* <h1>App Component</h1> */}
//         <div className="flex flex-wrap m-4">
//           {" "}
//           {user.map((item) => (
//             <div className="p-4 lg:w-1/3" key={item.id}>
//               <div className="h-full text-white bg-blue-900 bg-opacity-75 px-8 pt-16 pb-16 rounded text-center">
//                 <p>Id: {item.id}</p>
//                 <p> Name: {item.name}</p>
//                 <p>Phone No: {item.phone}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <p>{error}</p>
//       </div> */}