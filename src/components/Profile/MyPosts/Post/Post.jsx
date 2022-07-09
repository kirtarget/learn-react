import classes from './Post.module.css'

const Post = (props)=> {
    return (
        <div className={classes.post}>
            <div className={classes.ava_text}>
                <img className={classes.avatar} alt='' src='https://www.pngkey.com/png/full/357-3577496_discord-profile.png' />{props.message}
            </div>
            <div>
                likes: {props.likes}
            </div>

        </div>
    )
}

export default Post