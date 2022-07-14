import classes from '../Navbar.module.css'

const SidebarFriends = (props) => {


    let friendsElements = props.sbFriends.map(friend => <div key={friend.id} className={classes.sbFriend}><img alt=''
                                                                                                               src={friend.profilePic}></img>
        <p>{friend.name}</p></div>)
    return (

            <div>
                <h3>Мои друзья</h3>
                <div className={classes.sidebarFriends}>
                    {friendsElements}
                </div>
            </div>

    )
}

export default SidebarFriends