import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('personal');
  const [dueDate, setDueDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    
    const newTodo = {
      text: value,
      priority,
      category,
      dueDate: dueDate || null
    };
    
    onAdd(newTodo);
    setText('');
    setPriority('medium');
    setCategory('personal');
    setDueDate('');
  }

  return (
    <div className="card add-todo-card">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <div className="form-row">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
            className="add-todo-input"
            maxLength={100}
            required
          />
        </div>
        
        <div className="form-row">
          <select 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)}
            className="form-select"
          >
            <option value="low">🟢 Low Priority</option>
            <option value="medium">🟡 Medium Priority</option>
            <option value="high">🔴 High Priority</option>
          </select>
          
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
          >
            <option value="personal">👤 Personal</option>
            <option value="work">💼 Work</option>
            <option value="study">📚 Study</option>
            <option value="health">🏃 Health</option>
            <option value="shopping">🛒 Shopping</option>
          </select>
          
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="form-select"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <button type="submit" className="add-todo-button">
          ✨ Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo; 