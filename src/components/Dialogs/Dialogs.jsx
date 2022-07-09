import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <DialogItem profileImage={dialog.profileImage} name={dialog.name} id={dialog.id} className={classes.dialogItem} />)
    let messagesElements = props.messagesData.map(message => <Message className={classes.message} message={message.message}/>)
    return (
        <div>
            <h1>📝 Сообщения</h1>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs