import classes from '../Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id}>
            <div className={classes.dialogItem}>
                <div>
                    <img src={props.profileImage} alt={props.name}></img></div>
                <div>{props.name}</div>
            </div>
        </NavLink>

    )
}


export default DialogItem