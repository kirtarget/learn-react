import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileAgain, setUserProfile} from "../../Redux/profile-reducer";
import {useParams,} from "react-router-dom";
import {toggleIsFetching} from "../../Redux/users-reducer";

export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
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
                <Profile props={{...this.props}} profile={this.props.profile}/>
            </div>
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,


})


export default connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getProfileAgain,
    toggleIsFetching
})(withRouter(ProfileContainer))