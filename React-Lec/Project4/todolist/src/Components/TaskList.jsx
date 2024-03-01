import React from "react";
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {  useTodoContext } from "./TodoContext/TodoContext";

const TaskList = () => {
  const { task, handleRemove, handleAllRemove, handleEdit, handleComplete } =
   useTodoContext()

  // const [com, setcom] = useState(false)

  return (
    <div>
      <ul>
        {task.map((item) => (
          <li
            className={`flex justify-between border-b-2 px-2 py-1 items-center ${
              item.complete ? "line-through" : ""
            }`}
            key={item.id}
          >
            <div className="flex gap-3">
              <span
                className="cursor-pointer"
                onClick={() => handleComplete(item.id)}
              >
                <CiSquareCheck size={25} />
              </span>
              <span>{item.title}</span>
            </div>
            <div className="flex gap-3">
              <span
                className="cursor-pointer"
                onClick={() => handleEdit(item.id)}
              >
                <FaEdit size={25} />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleRemove(item.id)}
              >
                <MdDelete size={25} />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {task.length >= 1 && (
        <button
          onClick={handleAllRemove}
          className="text-white bg-red-500 border-0 py-2 mb-6 px-5 my-5 focus:outline-none hover:bg-red-600 rounded text-lg"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default TaskList;
