import Navbar from "./Navbar";

import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        sbFriends: state.navbar.sbFriends,
        navLinks: state.navbar.navLinks
    }
}


const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer