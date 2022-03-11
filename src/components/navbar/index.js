import React from 'react';
import cx from 'classnames';
import _styles from "./styles.module.css";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';

export default function Navbar() {
  return (
    <div className = {_styles.nav}> 
        <nav className = {_styles.nav_list}>
            <a href = "#" ><HomeIcon /> Home</a>
            <a href='#'><InfoIcon /> About</a>
            <a href="#"><HelpIcon /> Help</a>
        </nav>
    </div>
  )
}
