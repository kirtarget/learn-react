import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialogs}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>)
}

const Message = (props) => {

    return (
        <div className={classes.message}>{props.message}</div>
    )

}

const Dialogs = (props) => {
    return (
        <div>
            <h1>📝 Сообщения</h1>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>

                    <DialogItem name='Кирилл' id="1" />
                    <DialogItem name='Аня' id="2" />
                    <DialogItem name='Витя' id="3" />
                    <DialogItem name='Олег' id="4" />
                    <DialogItem name='Семён' id="5" />



                </div>
                <div className={classes.messages}>
                    <Message message="Привет!"/>
                    <Message message="Как дела?"/>
                    <Message message="Займи косарь"/>

                </div>
            </div>
        </div>
    )
}

export default Dialogs