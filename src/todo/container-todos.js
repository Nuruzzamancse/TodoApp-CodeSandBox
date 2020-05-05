import React, { useState } from "react";
import Todo from "./todo";
import FormTodo from "./form-todo";

export default function TodoContainer() {
  const [title, setTitle] = useState({});
  const [todos, setTodos] = useState([
    {
      title: "First",
      isCompleted: false
    },
    {
      title: "Second",
      isCompleted: true
    },
    {
      title: "Third",
      isCompleted: true
    }
  ]);

  const removeTodo = indx => {
    const newTodos = [...todos];
    newTodos.splice(indx, 1);
    setTodos(newTodos);
  };

  const completeTodo = (indx, isCompleted) => {
    const newTodos = [...todos];
    newTodos[indx].isCompleted = !isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      {todos.map((todo, indx) => {
        return (
          <Todo
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={() => completeTodo(indx, todo.isCompleted)}
          />
        );
      })}
      <FormTodo
        setTodos={setTodos}
        title={title}
        setTitle={setTitle}
        todos={todos}
      />
    </div>
  );
}
