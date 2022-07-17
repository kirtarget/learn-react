import classes from './ProfileInfo.module.scss'
import Preloader from "../../common/preloader";
import React from "react";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div>
                <img className={classes.coverImage} alt=''
                     src='https://images.unsplash.com/photo-1657127791271-d5a722d331d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'/>
            </div>
            <div>
                <img className={classes.profilePic}
                     src={props.profile.photos.large != null ? props.profile.photos.large : 'https://icoholder.com/files/img/e95471fcdd8dc7f74fb9a1c5375eee56.jpeg'}></img>
                <h3>{(props.profile.fullName).toUpperCase()}</h3>
                <p>{props.profile.aboutMe}</p>
                <div className={classes.profileLinks}>
                    Ссылки:
                    <div className={classes.linkLine}><p>VK:</p><a
                        href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
                    <div className={classes.linkLine}><p>facebook:</p><a
                        href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>
                    <div className={classes.linkLine}><p>twitter:</p><a
                        href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></div>
                    <div className={classes.linkLine}><p>instagram:</p><a
                        href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo