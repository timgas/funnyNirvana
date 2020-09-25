import React from 'react';
import style from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import Friends from "../FriendsBlock/Friends";

const Navbar = (props) => {

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            {/* <div className={style.item + ' ' + style.itemFriends }>
                <NavLink to="/friends">
                    Friends
                    <Friends state={props.state}/>
                </NavLink>
            </div> */}
        </nav>
    )
}

export default Navbar;
