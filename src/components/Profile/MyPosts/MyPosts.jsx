import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";

const   MyPosts = (props) => {
    // создание компоненты для каждого поста
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>).reverse()

    // Добавление поста и изменения текста нового поста в BLL
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    // Слушатель события для изменения текста
    let newPostElement = React.createRef()

    return (<div className={classes.myPosts}>
        <div>
            <h3>My posts</h3>
            <div className={classes.postCreation}>
                {/*Создание поста*/}
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Submit post</button>
                </div>
            </div>
        </div>
        {/*Выведение постов*/}
        {postsElements}
    </div>)
}

export default MyPosts