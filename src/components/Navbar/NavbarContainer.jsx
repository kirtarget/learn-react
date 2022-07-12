import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    return <Navbar sbFriends={state.navbar.sbFriends} navLinks={state.navbar.navLinks}/>
                }

            }


        </StoreContext.Consumer>

    )
}

export default NavbarContainer