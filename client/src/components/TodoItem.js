import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#2ed573';
      default: return '#747d8c';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high': return '🔴 High';
      case 'medium': return '🟡 Medium';
      case 'low': return '🟢 Low';
      default: return '⚪ Normal';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'personal': return '👤';
      case 'work': return '💼';
      case 'study': return '📚';
      case 'health': return '🏃';
      case 'shopping': return '🛒';
      default: return '📝';
    }
  };

  const isOverdue = () => {
    if (!todo.dueDate) return false;
    return new Date(todo.dueDate) < new Date() && !todo.completed;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${isOverdue() ? 'overdue' : ''}`}>
      <div className="todo-content">
        <button
          onClick={() => onToggle(todo._id)}
          className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && <span className="checkmark">✓</span>}
        </button>
        
        <div className="todo-details">
          <div className="todo-main">
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
            <div className="todo-meta">
              <span className="todo-category">
                {getCategoryIcon(todo.category)} {todo.category}
              </span>
              <span 
                className="todo-priority"
                style={{ color: getPriorityColor(todo.priority) }}
              >
                {getPriorityLabel(todo.priority)}
              </span>
              {todo.dueDate && (
                <span className={`todo-date ${isOverdue() ? 'overdue' : ''}`}>
                  📅 {formatDate(todo.dueDate)}
                  {isOverdue() && <span className="overdue-badge">OVERDUE</span>}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <button
        className="todo-delete"
        onClick={() => onDelete(todo._id)}
        aria-label="Delete todo"
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem; 