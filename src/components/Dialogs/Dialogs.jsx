import classes from './Dialogs.module.scss'
import React from "react";
import {NavLink, Navigate} from "react-router-dom";


const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateStateMessage(text)
    }
    if (!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div>
            <h1>📝 Сообщения</h1>
            <div className={classes.dialogs}>
                <div>
                    {
                        props.dialogState.dialogs.map(dialog => {
                            return (
                                <div key={dialog.id}>
                                    <NavLink to={"/dialogs/" + dialog.id}>
                                        <div className={classes.dialogItem}>
                                            <div>
                                                <img src={dialog.profileImage} alt={dialog.name}></img></div>
                                            <div>{dialog.name}</div>
                                        </div>
                                    </NavLink>
                                </div>)
                        })
                    }
                </div>
                <div className={classes.messages}>
                    {
                        props.dialogState.messages.map(message => {
                            return <div key={message.id} className={classes.message}>{message.message}</div>
                        })
                    }
                    <div className={classes.dialTA}>
                        <textarea onChange={onMessageChange} ref={newMessageElement}
                                  value={props.dialogState.newMessageText}></textarea>
                        <button onClick={props.newMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs