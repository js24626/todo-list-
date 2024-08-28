import React, { useState } from 'react';

function TodoInput({ setTodos }) {
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim()) {
      setTodos(prevTodos => [...prevTodos, { task }]);
      setTask(''); // Clear input field after adding
    }
  };

  return (
    <div className="flex items-center mb-6">
      <input
        className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-all"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
