import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux"
import {
    getProfile,
    getProfileAgain,
    setUserProfile,
} from "../../Redux/profile-reducer"
import {useLocation, useMatch, useNavigate, useParams} from "react-router-dom"
import {toggleIsFetching} from "../../Redux/users-reducer"
import {Navigate} from "react-router-dom"
import {withAuthRedirect} from "../hoc/withAuthRedirect"
import {compose} from "redux"


export const withRouter = (Component) => {
    let RouterComponent = (props) => {
        const match = useMatch("/profile/:userId/")
        return <Component {...props} match={match}/>
    }
    return RouterComponent
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        console.log(this.props.match)
        if (!userId) userId = 24940
        this.props.getProfile(userId)
    }

    componentDidUpdate(props) {
        let userId = this.props.match.params.userId
        if (props.match.params.userId !== userId) {
            userId = 24940
            this.props.getProfileAgain(userId)
        }
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth,
})

let composedContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        getProfileAgain,
        toggleIsFetching,
    }),
    withAuthRedirect
)(ProfileContainer)

export default composedContainer

// connect(mapStateToProps, {
//   setUserProfile,
//   getProfile,
//   getProfileAgain,
//   toggleIsFetching,
// })(withRouter(ProfileContainer))

//

//
