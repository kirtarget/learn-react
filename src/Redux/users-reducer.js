const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERSCOUNT = 'SET_TOTAL_USERSCOUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERSCOUNT, totalUsersCount})
export const toggleIsFetching = isFetching => ({type: SET_IS_FETCHING, isFetching: isFetching})

const initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }

                    return u
                })
            }

        case UNFOLLOW:
            return {

                ...state, users: state.users.map(u => {
                    if (u.id === action.userID)
                        return {...u, followed: false}

                    return u
                })
            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERSCOUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}


        default:
            return state
    }


}

export default usersReducer