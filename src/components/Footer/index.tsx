import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>&copy; {year} Gabriel Ramos</p>
    </footer>
  );
};
