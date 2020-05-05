import React from "react";

export default function Todo({ todo, removeTodo, completeTodo, indx }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30,
        padding: 5,
        minWidth: 300
      }}
    >
      <div style={{ width: 50, height: 40, justifyContent: "center" }}>
        <h6 style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
          {todo.title}
        </h6>
      </div>
      <button onClick={() => completeTodo(indx, todo.isCompleted)}>
        Complete
      </button>
      <button onClick={() => removeTodo(indx)}>x</button>
    </div>
  );
}
