import React, { useState } from "react";
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskList = ({ task, setTask, setActivity, setupdate, setedit }) => {
  
  // const [com, setcom] = useState(false)
  const handleRemove = (id) => {
    const isConfirm = window.confirm("are you sure you want to remove")
    if(isConfirm){
      const filterItem = task.filter((elem) => id !== elem.id);

      setTask(filterItem);
    }
   
  };

  const handleAllRemove = () => {
    setTask([]);
  };

  const handleEdit = (id) => {
    const findItem = task.find((element) => {
      return id === element.id;
    });
    console.log(findItem);
    setActivity(findItem.title);
    setupdate(false);
    setedit(id);
  };


  const handleComplete =(id)=>{
       setTask(task.map((comItems)=>{
              if(comItems.id === id){
                return {...comItems , complete: !comItems.complete }
              }
              return comItems
       }))
  }
  return (
    <div>
      <ul>
        {task.map((item) => (
          <li
            className={`flex justify-between border-b-2 px-2 py-1 items-center ${item.complete? 'line-through' : ""}`}
            key={item.id}
          >
            <div className="flex gap-3">
              <span className="cursor-pointer" onClick={()=>handleComplete(item.id)}>
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
