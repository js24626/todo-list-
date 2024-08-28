import React, { useState } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
<div className="bg-blue-100 min-h-screen p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Todo List</h1>
        <TodoInput setTodos={setTodos} />
        {todos.length === 0 ? (
          <div className="text-center py-6">
            <h2 className="text-lg text-gray-600">No tasks added yet.</h2>
          </div>
        ) : (
          <TodoList todos={todos} setTodos={setTodos} />
        )}
      </div>
    </div>
  );
}

export default App;
