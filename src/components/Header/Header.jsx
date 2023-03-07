import React, { useState } from 'react';
import Logo from '../../UI/Logo/Logo';
import classes from './Header.module.scss';
import Nav from './Nav/Nav';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const menuToggle = !menuOpen ? (
    <CgMenuRight onClick={handleMenuToggle} />
  ) : (
    <CgClose onClick={handleMenuToggle} />
  );

  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
      <div className={classes.header_menu}>
        <div className={classes.header_menu_toggle}>{menuToggle}</div>
        <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
          <Nav isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </header>
  );
};

export default Header;
