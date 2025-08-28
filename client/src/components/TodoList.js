import React, { useState, useMemo } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');

  const filteredAndSortedTodos = useMemo(() => {
    let filtered = todos.filter(todo => {
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || todo.category === filterCategory;
      const matchesPriority = filterPriority === 'all' || todo.priority === filterPriority;
      const matchesStatus = filterStatus === 'all' || 
        (filterStatus === 'completed' && todo.completed) ||
        (filterStatus === 'pending' && !todo.completed);

      return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
    });

    // Sort todos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'dueDate':
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'createdAt':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return filtered;
  }, [todos, searchTerm, filterCategory, filterPriority, filterStatus, sortBy]);

  if (!todos.length) {
    return <p style={{ padding: 8 }}>No tasks yet.</p>;
  }

  return (
    <div className="todo-list-container">
      {/* Search and Filters */}
      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-controls">
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
            className="filter-select"
          >
            <option value="all">📂 All Categories</option>
            <option value="personal">👤 Personal</option>
            <option value="work">💼 Work</option>
            <option value="study">📚 Study</option>
            <option value="health">🏃 Health</option>
            <option value="shopping">🛒 Shopping</option>
          </select>
          
          <select 
            value={filterPriority} 
            onChange={(e) => setFilterPriority(e.target.value)}
            className="filter-select"
          >
            <option value="all">🎯 All Priorities</option>
            <option value="high">🔴 High</option>
            <option value="medium">🟡 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
          
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">📋 All Tasks</option>
            <option value="pending">⏳ Pending</option>
            <option value="completed">✅ Completed</option>
          </select>
          
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="createdAt">🕒 Date Created</option>
            <option value="priority">🎯 Priority</option>
            <option value="dueDate">📅 Due Date</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="results-info">
        <span>{filteredAndSortedTodos.length} of {todos.length} tasks</span>
        {searchTerm && <span> • Searching: "{searchTerm}"</span>}
      </div>

      {/* Todo List */}
      <div className="card">
        {filteredAndSortedTodos.length === 0 ? (
          <div className="no-results">
            <p>🔍 No tasks match your filters.</p>
            <p>Try adjusting your search or filters.</p>
          </div>
        ) : (
          <ul className="todo-list">
            {filteredAndSortedTodos.map(todo => (
              <TodoItem 
                key={todo._id} 
                todo={todo} 
                onToggle={onToggle} 
                onDelete={onDelete} 
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoList; 