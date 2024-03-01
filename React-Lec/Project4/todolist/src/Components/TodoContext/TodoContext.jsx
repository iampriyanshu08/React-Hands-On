import {createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();
const useTodoContext = ()=> useContext(TodoContext)
const getLocalItem =()=>{
    const storedItem = localStorage.getItem('list')
    return storedItem ? JSON.parse(localStorage.getItem('list')): []
}

const TodoProvider = ({ children }) => {
  const [activity, setActivity] = useState("");
  const [task, settask] = useState(getLocalItem());
  const [update, setupdate] = useState(true);
  const [edit, setedit] = useState(null);


  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(task))
  }, [task])
  

  const handleUpdate = () => {
    if (activity == "") {
      alert("please enter activity");
    } else if (!update) {
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
      const allActivity = { id: uuidv4(), title: activity, complete: false };

      console.log("btn clicked");
      settask([...task, allActivity]);
      setActivity("");
    }
  };

  const handleRemove = (id) => {
    const isConfirm = window.confirm("are you sure you want to remove");
    if (isConfirm) {
      const filterItem = task.filter((elem) => id !== elem.id);

      settask(filterItem);
    }
  };

  const handleAllRemove = () => {
    settask([]);
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

  const handleComplete = (id) => {
    settask(
      task.map((comItems) => {
        if (comItems.id === id) {
          return { ...comItems, complete: !comItems.complete };
        }
        return comItems;
      })
    );
  };

  const allValue = {
    activity,
    setActivity,
    task,
    settask,
    update,
    setupdate,
    edit,
    setedit,
    handleUpdate,
    handleRemove,
    handleAllRemove,
    handleEdit,
    handleComplete,
  };

  return (
    <TodoContext.Provider value={allValue}>{children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider,useTodoContext };
