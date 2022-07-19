import {
  addMessageActionCreator,
  onMessageActionCreator,
} from "../../Redux/dialog-reducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {withAuthRedirect} from "../hoc/withAuthRedirect"
import {compose} from "redux"

let mapStateToProps = (state) => {
  return {
    dialogState: state.dialogPage,
    // isAuth: state.auth.isAuth,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateStateMessage: (text) => dispatch(onMessageActionCreator(text)),
    newMessage: () => dispatch(addMessageActionCreator()),
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
