import Users from "./Users.jsx";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
    }

}
const mapDispatchToProps = (dispatch) => {

    return {
        follow: (userID) => dispatch(followAC(userID)),
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }

}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer