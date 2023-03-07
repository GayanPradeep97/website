import React, {setState} from 'react';
import Logo from '../../UI/Logo/Logo';
import classes from './Header.module.scss';
import Nav from './Nav/Nav';
import {CgMenuRight, CgClose} from 'react-icons/cg';

const Header = () => {

    const [menuOpen, setMenuOpen] = setState(false);

    const handleMenuToggle = () => {
        setMenuOpen((p) => !p);
    }

    const menuToggle = !menuOpen ? (
        <CgMenuRight onclick={handleMenuToggle}/>
    ): (
        <CgClose onclick={handleMenuToggle}/>
    );


    return (
        <Header classname={classes.header}>
            <Logo/>
            <Nav/>
            <div className={classes.header_menu}>
                <div className={classes.header_menu_toggle}>
                    {menuToggle}
                </div>
                <aside className={`${classes.menu} ${classes.open && classes.show}`}>
                    <Nav isMenu menuToggle={handleMenuToggle} />
                    </aside>
            </div>
        </Header>
    );
}

export default Header;
