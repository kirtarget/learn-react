import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ()=> {
    return (<div>
        <div>
            My posts
            <div className={classes.postCreation}>
                <textarea> </textarea>
                <button>Submit post</button>
            </div>
        </div>
        <Post message='Hi! How are you?' likes='3' />
        <Post message="It's my first post" likes='12'/>
    </div>)
}

export default MyPosts