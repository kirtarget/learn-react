import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {


    let postsElements = props.postsData.map(p =>  <Post message={p.message} likes={p.likesCount}/>)

    return (<div className={classes.myPosts}>
        <div>
            <h3>My posts</h3>
            <div className={classes.postCreation}>
                <div><textarea> </textarea></div>
                <div>
                    <button>Submit post</button>
                </div>
            </div>
        </div>

        {postsElements}

    </div>)
}

export default MyPosts