import {addMessageActionCreator, onMessageActionCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogState: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateStateMessage: (text) => dispatch(onMessageActionCreator(text)),
        newMessage: () => dispatch(addMessageActionCreator())

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer