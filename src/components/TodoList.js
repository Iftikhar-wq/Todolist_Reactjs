import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    console.log(id);
    setEditTodo(findTodo);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div className="listbutton">
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
