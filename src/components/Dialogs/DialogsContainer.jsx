import React from 'react'
import s from './Dialogs.module.css'
import { updageMessageActionCreator, addNewMessageActionCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {


//     return <StoreContext.Consumer >
//         {store => {
//             let state = store.getState().dialogsPage;

//             let updateNewMessageText = (text) => {
//                 let action = updageMessageActionCreator(text);
//                 store.dispatch(action);

//             }

//             let enterMessage = () => {
//                 let action = addNewMessageActionCreator();
//                 store.dispatch(action);

//             }
//             return <Dialogs updateNewMessage={updateNewMessageText}
//                 enterMessage={enterMessage}
//                 state={state}
//             />
//         }
//         }

//     </StoreContext.Consumer>
// } Переписали с помощью Библиотеки React-redux всю эту логику

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            let action = updageMessageActionCreator(text);
            dispatch(action);
        },

        enterMessage: () => {
            let action = addNewMessageActionCreator();
            dispatch(action);
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(<Dialogs/>);
export default DialogsContainer;