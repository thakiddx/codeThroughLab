import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
         
        }}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
    </div>
  );
};

export default Todo;