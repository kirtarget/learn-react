import axios from "axios"
import {UserAPI} from "../api/api"

const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text,
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

// Санки

export const getProfile = (userId) => {
    return (dispatch) => {
        if (!userId) userId = 24940

        UserAPI.gettingProfile(userId)
            .then((response) => {
                dispatch(setUserProfile(response.data))
            })
            .catch((e) => console.warn(e))
    }
}
export const getProfileAgain = (userId) => {
    return (dispatch) => {
        UserAPI.gettingProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data))
        })
    }
}
let initialState = {
    posts: [
        {message: "It's my first post", id: 2, likesCount: 8},
        {message: "Hi! How are you all?", id: 1, likesCount: 12},
    ],
    newPostText: "",
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                id: Math.ceil(Math.random() * 35000),
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }
}

export default profileReducer
