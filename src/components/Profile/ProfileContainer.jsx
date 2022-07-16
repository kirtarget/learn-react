import React from 'react'

import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
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
        // let userId = this.props.userId
        this.props.toggleIsFetching(true)
        // console.log(this.props.userId)

        // let userId = this.props.ProfilePageIdGetter()
        let userId = this.props.match.params.userId
        if (!userId) userId = 24940

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {

            this.props.setUserProfile(response.data)
            this.props.toggleIsFetching(false)

        }).catch((e) => console.warn(e))
    }

    componentDidUpdate(props) {
        let userId = this.props.match.params.userId
        if (props.match.params.userId !== userId) {
            userId = 24940
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    this.props.setUserProfile(response.data);
                });
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

// let ProfilePageIdGetter =() => {
//     // Get the userId param from the URL.
//     let  params  = useParams();
//     // ...
//     return params.userId
// }


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,


})


export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(withRouter(ProfileContainer))