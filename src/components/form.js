import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, EditTodo, setEditTodo }) => {
  useEffect(() => {
    if (EditTodo) {
      setInput(EditTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, EditTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!EditTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, EditTodo.id, EditTodo.completed);
    }
  };
  return (
    <>
      <div className="header">
        <h1>Todos List</h1>
      </div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
          value={input}
          onChange={onInputChange}
        />
        <button className="button-add" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
