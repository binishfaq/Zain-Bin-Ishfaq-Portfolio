import React from 'react';
import { Link } from 'react-router-dom';

const ErrPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '80px', color: '#ff6b00' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: '#ff6b00', marginTop: '20px', display: 'inline-block' }}>
        Go Back Home →
      </Link>
    </div>
  );
};

export default ErrPage;