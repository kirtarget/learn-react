import './Users.scss'
import axios from "axios";
import React from 'react'

class Users extends React.Component {


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(response => {
            this.props.setUsers(response.data.items)
        }).catch((e) => console.warn(e))
    }

    render() {
        return (
            <div>

                {
                    this.props.users.map((u) => (
                        <div key={u.id}>
                            <button onClick={this.getUsers}></button>
                            <div className="userContainer">
                                <div className="profileSection">
                                    <div className="profileAvatar"><img
                                        src={u.photos.small != null ? u.photos.small : "https://i.pinimg.com/originals/e5/06/cf/e506cfcd9f85b11eefd590f871db9784.png"}></img>
                                    </div>
                                    <div className="profileName"><h3>{u.name}</h3></div>
                                </div>
                                <div className="profileInformation">
                                    <div className="profileStatus">{u.status}</div>
                                    <div
                                        className="profileLocation">{"u.location.city + ', ' + u.location.country"}</div>

                                    {u.followed ?
                                        <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }} className="subscribeButton">Отписаться</button> :
                                        <button onClick={() => {
                                            this.props.follow(u.id)

                                        }} className="subscribeButton">Подписаться</button>}

                                </div>
                            </div>
                        </div>
                    ))
                }
            < /div>
        )

    }
}


export default Users