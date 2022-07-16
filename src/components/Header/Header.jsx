import classes from './Header.module.scss'
import axios from "axios";
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {


    return (
        <header className={classes.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                alt=''/>
            <h2>ВReact'е</h2>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :
                    <a href="#">Login</a>}
            </div>
        </header>
    )
}

export default Header