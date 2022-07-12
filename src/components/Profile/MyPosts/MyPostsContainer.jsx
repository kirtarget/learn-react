import React from "react";
import {addPostActionCreator, onPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {

                (store) => {
                    let state = store.getState().profilePage
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChange = (text) => {
                        let action = onPostActionCreator(text)
                        store.dispatch(action)
                    }


                    return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts}
                                    newPostText={state.newPostText}/>
                }
            }


        </StoreContext.Consumer>
    )
}

export default MyPostsContainer