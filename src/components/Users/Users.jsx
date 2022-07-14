import './Users.scss'

import React from 'react'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {
                    pages.map((p) => {
                        return <span key={p} onClick={(e) => props.onPageChanged(p)}
                                     className={props.currentPage === p ? "selectedPage" : "pageNumber"}> {p}</span>
                    })
                }
            </div>
            {
                props.users.map((u) => (
                    <div key={u.id}>
                        <div className="userContainer">
                            <div className="profileSection">
                                <div className="profileAvatar"><img
                                    src={u.photos.small != null ? u.photos.small : "https://i.pinimg.com/originals/e5/06/cf/e506cfcd9f85b11eefd590f871db9784.png"}></img>
                                </div>
                                {/*<div className="profileName"><h3>{u.id }</h3></div>*/}
                            </div>
                            <div className="profileInformation">
                                <div className="profileStatus">{u.name != null ? u.name : "Какой-то чел"}</div>
                                <div className="profileLocation">id: {u.id}</div>

                                {u.followed ?
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }} className="subscribeButton">Отписаться</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)

                                    }} className="subscribeButton">Подписаться</button>}

                                </div>
                            </div>
                        </div>
                    ))
                }
            < /div>
        )

    }


export default Users