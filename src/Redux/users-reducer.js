const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})

const initialState = {
    users: [
        // {
        //     fullName: "Кирилл Карташёв",
        //     location: {
        //         country: "Россия",
        //         city: "Москва"
        //     },
        //     status: "Я веган (я)",
        //     profilePic: "https://i.pinimg.com/originals/e5/06/cf/e506cfcd9f85b11eefd590f871db9784.png",
        //     id: 180194,
        //     isFollow: false,
        // },
        // {
        //     fullName: "Николай Гоголь",
        //     location: {
        //         country: "Украина",
        //         city: "Киев"
        //     },
        //     status: "Я жив",
        //     profilePic: "https://i.pinimg.com/originals/e5/06/cf/e506cfcd9f85b11eefd590f871db9784.png",
        //     id: 66613,
        //     isFollow: true,
        // },
        // {
        //     fullName: "Юрий Гагарин",
        //     location: {
        //         country: "Россия",
        //         city: "Москва"
        //     },
        //     status: "Поехали",
        //     profilePic: "https://i.pinimg.com/originals/e5/06/cf/e506cfcd9f85b11eefd590f871db9784.png",
        //     id: 120461,
        //     isFollow: false,
        // },

    ]
}

const usersReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        console.log('works')
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

        case SET_USERS: {
            if (state.users.length === action.users.length) return

            return {...state, users: [...state.users, ...action.users]}
        }


        default:
            return state
    }


}

export default usersReducer