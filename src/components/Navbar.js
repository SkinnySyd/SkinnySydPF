// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: '#282c34',
    display: 'flex',
    justifyContent: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Navbar;
