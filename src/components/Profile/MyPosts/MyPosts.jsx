import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";
import {addPostActionCreator, onPostActionCreator} from "../../../Redux/state.js";

const   MyPosts = (props) => {
    // создание компоненты для каждого поста
    let postsElements = props.state.profilePage.posts.map(p => <Post message={p.message} likes={p.likesCount}/>).reverse()



    // Добавление поста и изменения текста нового поста в BLL
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = onPostActionCreator(text)
        props.dispatch(action )
    }

    // Слушатель события для изменения текста
    let newPostElement = React.createRef()

    return (<div className={classes.myPosts}>
        <div>
            <h3>My posts</h3>
            <div className={classes.postCreation}>
                {/*Создание поста*/}
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Submit post</button>
                </div>
            </div>
        </div>
        {/*Выведение постов*/}
        {postsElements}
    </div>)
}

export default MyPosts