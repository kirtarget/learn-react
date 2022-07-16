const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_USER = 'SET_AUTH_USER'


export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const setAuthUser = () => ({type: SET_AUTH_USER})


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