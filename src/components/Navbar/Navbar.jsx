import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props)=> {


    let sidebarEls = props.navLinks.map(l=><li><NavLink className={ navData => navData.isActive ? classes.active : classes.item } to={l.link}>{l.name}</NavLink></li>)
    return (
        <nav className={classes.nav}>
            <ul>
                {sidebarEls}

            </ul>
        </nav>
    )
}

export default Navbar