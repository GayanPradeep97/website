import React, {useState} from 'react'
import classes from './Nav.module.scss'


const Nav = () => {

    const [isMenu, setIsMenu] = useState(false);

    const menuToggle = () => {
      setIsMenu(!isMenu);
    };

  return (
    <nav className={isMenu ? classes.menu_nav : classes.nav}>
        <ul>
            <li onClick={menuToggle}> 
                <a href='/'>Location </a>
            </li>
            <li onClick={menuToggle}>
                <a href='/'>Pricing </a>
            </li>
            <li onClick={menuToggle}>
                <a href='/'>Learn More </a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav

