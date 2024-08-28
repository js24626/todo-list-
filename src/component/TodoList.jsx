import React from 'react';

function TodoList({ todos, setTodos }) {
  const handleRemoveTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ul className="space-y-4">
      {todos.map((todo, index) => (
        <li key={index} className="flex items-center justify-between bg-black text-white p-4 rounded-lg">
          <span>{todo.task}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-all"
            onClick={() => handleRemoveTodo(index)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
