import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import SidebarFriends from "./SidebarFriends/SidebarFriends";

const Navbar = (props) => {


    let sidebarEls = props.navLinks.map(l => <li key={l.id}><NavLink
        className={navData => navData.isActive ? classes.active : classes.item} to={l.link}>{l.name}</NavLink></li>)
    return (
        <nav className={classes.nav}>
            <div>
                <ul>
                    {sidebarEls}

                </ul>
            </div>
            <SidebarFriends sbFriends={props.sbFriends}/>
        </nav>
    )
}

export default Navbar