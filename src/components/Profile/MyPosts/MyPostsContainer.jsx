import {addPostActionCreator, onPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//
//                 (store) => {
//                     let state = store.getState().profilePage
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//                     let onPostChange = (text) => {
//                         let action = onPostActionCreator(text)
//                         store.dispatch(action)
//                     }
//
//
//                     return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts}
//                                     newPostText={state.newPostText}/>
//                 }
//             }
//
//
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(onPostActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer