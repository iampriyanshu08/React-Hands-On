import React from "react";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./Components/TodoContext/TodoContext";

const App = () => {
  return (
    <>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  );
};

export default App;
