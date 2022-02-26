import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>{`Gabriel Ramos • ${year}`}</p>
      <p>|</p>
      <p>
        <a
          href="http://linkedin.com/in/gabrielocramos"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>•</p>
      <p>
        <a
          href="http://instagram.com/eugaoliver"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </p>
      <p>•</p>
      <p>
        <a href="http://github.com/gaoliver" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <p>•</p>
      <p>
        <a href="mailto:gabriel.o.c.ramos@gmail.com">E-Mail</a>
      </p>
    </footer>
  );
};

export default Footer
