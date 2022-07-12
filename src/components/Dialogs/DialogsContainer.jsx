import React from "react";
import {addMessageActionCreator, onMessageActionCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (<StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogPage
                    let updateStateMessage = (text) => {
                        store.dispatch(onMessageActionCreator(text))
                    }
                    let newMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    return <Dialogs dialogState={state} updateStateMessage={updateStateMessage}
                                    newMessage={newMessage}/>

                }

            }
        </StoreContext.Consumer>
    )


}

export default DialogsContainer