import {UserAPI} from "../api/api";
import axios from "axios";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_USER = 'SET_AUTH_USER'


export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const setAuthUser = () => ({type: SET_AUTH_USER})

// Санки

export const logIn = () => {
    return (dispatch) => {

        UserAPI.loggingIn()
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                    dispatch(setAuthUser())
                }
            }).catch((e) => console.warn(e))
    }
}


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_AUTH_USER:
            return {
                ...state,
                isAuth: true
            }


        default:
            return state
    }


}

export default authReducer