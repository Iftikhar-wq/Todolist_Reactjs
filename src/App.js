import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/TodoList";
import { useEffect } from "react";


function App() {
  const initalstate = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setinput] = useState("")
  const [todos, setTodos] = useState(initalstate);
  const [EditTodo, setEditTodo] = useState(null)
  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify (todos));
    }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper ">
        <Form input={input}
          setInput={setinput}
          todos={todos}
          setTodos={setTodos}
          EditTodo={EditTodo}
          setEditTodo={setEditTodo}
          />
        <TodoList todos={todos} setTodos ={setTodos} setEditTodo={setEditTodo}/>
      </div>
    </div>
  );
}

export default App;
