import React from 'react';
import cx from 'classnames';
import _styles from "./styles.module.css";

export default function Navbar() {
  return (
    <div className = {_styles.nav}> 
        <nav className = {_styles.nav_list}>
            <a href = "#" >Home</a>
            <a href='#'>About</a>
            <a href="#">Contact</a>
        </nav>
    </div>
  )
}
