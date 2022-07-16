import Header from "./Header";
import React from 'react'
import {connect} from "react-redux";
import {logIn, setAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.logIn()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logIn, setAuthUserData})(HeaderContainer)