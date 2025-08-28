import React from 'react';

function Header({ todos, onThemeToggle, isDarkTheme }) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  const progressPercentage = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-content">
          <h1>📝 Ajey's Todo App</h1>
          <p>Organize your tasks, stay focused.</p>
        </div>
        <button 
          onClick={onThemeToggle}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
      </div>
      
      {totalTodos > 0 && (
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">{totalTodos}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{pendingTodos}</span>
            <span className="stat-label">Pending</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{completedTodos}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{progressPercentage}%</span>
            <span className="stat-label">Progress</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header; 