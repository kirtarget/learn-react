const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_POST = 'ADD_POST'

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})

let initialState = {
    posts: [
        {message: 'It\'s my first post', id: 2, likesCount: 8},
        {message: 'Hi! How are you all?', id: 1, likesCount: 12},
    ],
    newPostText: '',
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                id: 12,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }


        default:
            return state
    }


}

export default profileReducer