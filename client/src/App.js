import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import EmptyState from './components/EmptyState';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const saved = localStorage.getItem('todo-theme');
    return saved ? JSON.parse(saved) : false;
  });

  // Apply theme to body
  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    localStorage.setItem('todo-theme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  async function fetchTodos() {
    try {
      setLoading(true);
      const res = await fetch('/api/todos');
      const data = await res.json();
      
      // Transform existing todos to include new fields if they don't have them
      const enhancedTodos = data.map(todo => ({
        ...todo,
        priority: todo.priority || 'medium',
        category: todo.category || 'personal',
        dueDate: todo.dueDate || null
      }));
      
      setTodos(enhancedTodos);
      setError('');
    } catch {
      setError('Failed to load todos');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchTodos(); }, []);

  async function addTodo(todoData) {
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: todoData.text,
          priority: todoData.priority,
          category: todoData.category,
          dueDate: todoData.dueDate
        }),
      });
      const created = await res.json();
      
      // Ensure the created todo has all required fields
      const enhancedTodo = {
        ...created,
        priority: created.priority || todoData.priority,
        category: created.category || todoData.category,
        dueDate: created.dueDate || todoData.dueDate
      };
      
      setTodos(prev => [enhancedTodo, ...prev]);
    } catch {
      setError('Failed to add todo');
    }
  }

  async function toggleTodo(id) {
    try {
      const res = await fetch(`/api/todos/${id}`, { method: 'PUT' });
      const updated = await res.json();
      setTodos(prev => prev.map(t => t._id === id ? updated : t));
    } catch {
      setError('Failed to toggle todo');
    }
  }

  async function deleteTodo(id) {
    try {
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });
      setTodos(prev => prev.filter(t => t._id !== id));
    } catch {
      setError('Failed to delete todo');
    }
  }

  return (
    <div className="app">
      <Header 
        todos={todos} 
        onThemeToggle={toggleTheme} 
        isDarkTheme={isDarkTheme} 
      />
      <AddTodo onAdd={addTodo} />

      {error && <div className="card error-card">{error}</div>}

      {loading ? (
        <div className="card loading-card">
          <div className="loading-spinner">⏳</div>
          <p>Loading your tasks...</p>
        </div>
      ) : todos.length === 0 ? (
        <EmptyState />
      ) : (
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      )}
    </div>
  );
}

export default App;