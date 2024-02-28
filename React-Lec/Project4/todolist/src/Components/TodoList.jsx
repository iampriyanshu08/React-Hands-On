import React, { useState } from "react";
import todoimg from "../assets/todopic1.webp";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [task, settask] = useState([]);
  const [update, setupdate] = useState(true);
  const [edit, setedit] = useState(null);

  const handleUpdate = () => {
    if(activity==""){
      alert("please enter activity")
    }
    else if (!update) {
      settask(
        task.map((newElem) => {
          if (newElem.id === edit) {
            return { ...newElem, title: activity };
          }
          return newElem;
        })
      );
      setupdate(true);
      setActivity("");
      setedit(null);
    } else {
      const allActivity = { id: uuidv4(), title: activity,complete : false };

      console.log("btn clicked");
      settask([...task, allActivity]);
      setActivity("");
    }
  };

  return (
    <div>
      <section className="text-gray-600 overflow-hidden body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-[80%] mx-auto flex flex-wrap">
            <div className="lg:w-1/2">
              <img
                src={todoimg}
                alt="ecommerce"
                className="w-full lg:h-auto h-64 object-cover object-center rounded"
              />
            </div>

            <div className="lg:w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 font-bold mb-5 text-center text-5xl">
                Things to do
              </h2>
              <div className="mb-4">
                <input
                  type="text"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  placeholder="Enter your things to do..."
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {update ? (
                <button
                  className="text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleUpdate}
                >
                  Add
                </button>
              ) : (
                <button
                  className="text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              )}

              <TaskList
                task={task}
                setTask={settask}
                setActivity={setActivity}
                setupdate={setupdate}
                setedit={setedit}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
