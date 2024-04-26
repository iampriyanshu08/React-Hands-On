import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


const App = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showfinished, setshowfinished] = useState(false)


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)

    }
  }, [])
  
  const toggleFinished =(e) => {
    setshowfinished(!showfinished)
  }

  const saveTodos = ()=>{
localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    settodo(t[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });

    settodos(newTodos);
    saveTodos()
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });

    settodos(newTodos);
    saveTodos()
  };
  const handleAdd = () => {
    if (todo.length === 0) {
      alert("todo cannnot be empty");
    } else {
      settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      saveTodos()
      settodo("");
     
    }
    
    
  };
  const handleChange = (e) => {
    settodo(e.target.value);
  };
  const handleCheckbox = (e, id) => {
    let newtodos = [...todos];
    settodos(
      newtodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
    saveTodos()
  };
  return (
    <>
      <Navbar />
      <div className="md:w-1/2 md:mx-auto md:container p-5 my-4 rounded-xl bg-slate-100 min-h-[90vh] text-center mx-3 text-black">
        <h1 className="text-center">TodoList.. Manage your notes in one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Add a todo</h2>
          <div className="flex"><input 
            type="text"
            className="w-full rounded-full px-5 py-1"
            onChange={handleChange}
            value={todo}
          />
          <button
            onClick={handleAdd}
            className="bg-yellow-300 hover:bg-yellow-500 text-sm font-bold p-2 py-1 rounded-full mx-2"
          >
            Add
          </button></div>
        </div>
       <div className="flex justify-center items-center gap-2">
       <input onChange={toggleFinished} type="checkbox" checked={showfinished}/> Finished Todos
       </div>
        <h2 className="text-lg font-bold my-5">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <h1 className="m-5">No todos Right now</h1>}
          {todos.map((item) => {
           return  (showfinished || !item.isCompleted)&& 
              <div
                className="todo flex  justify-between my-3 items-center mx-auto"
                key={item.id}
              >
                <div className="flex gap-5">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={(e) => handleCheckbox(e, item.id)}
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>

                <div className="buttons flex h-full">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-yellow-300 hover:bg-yellow-500 text-sm font-bold p-2 py-1 rounded-md mx-2"
                  >
                    <FaEdit size={17} />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-yellow-300 hover:bg-yellow-500 text-sm font-bold p-2 py-1 rounded-md mx-2"
                  >
                    <RiDeleteBin5Fill size={17} />
                  </button>
                </div>
              </div>
            
          })}
        </div>
      </div>
    </>
  );
};

export default App;
