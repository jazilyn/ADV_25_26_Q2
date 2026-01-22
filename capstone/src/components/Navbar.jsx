import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import Library from '../assets/image 2.png';
import { useTheme } from "../context/ThemeContext";

function Navbar() {
const { theme } = useTheme()

const navbarTheme = {
  backgroundColor: theme === "light" ? "#E6ECFB" : "#0F1B38",
  color: theme === "light" ? "black" : "white",
};

const linkStyle = {
  color: theme === "light" ? "black" : "white",
  textDecoration: "none",
  margin: "0 10px"
}

  return (
     <div>
            <nav className={styles.navbar} style={navbarTheme}>
                <ul>
                    <div className={styles.LeftNav}>
                        <img className={styles.LibLogo} src={Library} alt="logo"/>
                    <p> Newark Library </p>
                    </div>
                    <div className={styles.RightNav}>
        <Link to="/" style={linkStyle}>Home</Link> | 
      <Link to="/add" style={linkStyle}>Add Book</Link> | 
      <Link to="/settings" style={linkStyle}>Settings</Link> |
      <Link to="/login" style={linkStyle}>Login</Link>
    </div>
                </ul>
            </nav>
        </div>
  );
}

export default Navbar;