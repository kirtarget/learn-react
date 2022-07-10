import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props)=> {
    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     createPost={props.createPost}
                     postsData={props.postsData} />
        </div>
    )
}

export default Profile