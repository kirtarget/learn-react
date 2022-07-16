import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";


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
            {(


                <div>
                    <h3>Мои друзья</h3>
                    <div className={classes.sidebarFriends}>
                        {props.sbFriends.map(friend => <div key={friend.id} className={classes.sbFriend}><img alt=''
                                                                                                              src={friend.profilePic}></img>
                            <p>{friend.name}</p></div>)}
                    </div>
                </div>

            )
            }
        </nav>
    )
}

export default Navbar