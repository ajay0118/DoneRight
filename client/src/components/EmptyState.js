import React from 'react';

function EmptyState() {
  return (
    <div className="card" style={{ textAlign: 'center', padding: 32 }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>🎯</div>
      <h2 style={{ marginBottom: 8 }}>No tasks yet!</h2>
      <p>Add your first task above.</p>
    </div>
  );
}

export default EmptyState; 