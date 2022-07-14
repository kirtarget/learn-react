import classes from './Dialogs.module.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";


const Dialogs = (props) => {


    let dialogElements = props.dialogState.dialogs.map(dialog => (


        <DialogItem profileImage={dialog.profileImage}
                    name={dialog.name} id={dialog.id}
                    className={classes.dialogItem}/>)
    )
    let messagesElements = props.dialogState.messages.map(message => <Message className={classes.message}
                                                                              message={message.message}/>)
    let newMessageElement = React.createRef()

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateStateMessage(text)
    }
    return (
        <div>
            <h1>📝 Сообщения</h1>
            <div className={classes.dialogs}>
                <div>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
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