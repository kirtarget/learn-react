import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = ()=> {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink className={ navData => navData.isActive ? classes.active : classes.item } to='/profile'>Profile</NavLink></li>
                <li><NavLink className={ navData => navData.isActive ? classes.active : classes.item } to='/dialogs'>Messages</NavLink></li>
                <li><NavLink className={ navData => navData.isActive ? classes.active : classes.item } to='/news'>News</NavLink></li>
                <li><NavLink className={ navData => navData.isActive ? classes.active : classes.item } to='/music'>Music</NavLink></li>
                <li><NavLink className={ navData => navData.isActive ? classes.active : classes.item } to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar