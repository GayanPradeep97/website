import React from 'react';
import Logo from '../../UI/Logo/Logo';
import classes from './Header.module.scss';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <Header classname={classes.header}>
            <Logo/>
            <Nav/>
            <div className={classes.header_menu}>
                <div className={classes.header_menu_toggle}>
                    {/* {menuToggle} */}
                </div>
                <aside className={`${classes.menu} ${classes.open && classes.show}`}></aside>
            </div>
        </Header>
    );
}

export default Header;
