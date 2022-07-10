import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";

const   MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likes={p.likesCount}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.createPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (<div className={classes.myPosts}>
        <div>
            <h3>My posts</h3>
            <div className={classes.postCreation}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Submit post</button>
                </div>
            </div>
        </div>
        {postsElements}
    </div>)
}

export default MyPosts