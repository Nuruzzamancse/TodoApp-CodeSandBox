import React from "react";

export default function FormTodo({ todos, title, setTitle, setTodos }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const newTodos = [...todos];
        newTodos.push(title);
        setTodos(newTodos);
        setTitle({});
      }}
    >
      <input
        type="text"
        style={{ marginTop: 20 }}
        onChange={e => {
          setTitle({ title: e.target.value, isCompleted: false });
        }}
      />
    </form>
  );
}
