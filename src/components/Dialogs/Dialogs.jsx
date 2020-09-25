import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updageMessageActionCreator, addNewMessageActionCreator } from '../../redux/dialogs_reducer';

const Dialogs = (props) => {
    let updateNewMessageText = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);

    }

    let sendMessage = () => {
        props.enterMessage();

    }

    const dialogItems = props.state.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    const messageItems = props.state.messages.map(item => <Message message={item.message} />);
    return (
        <div className={s.dialogs}>
            <div>
                {dialogItems}
            </div>

            <div className={s.messages}>
                {messageItems}
            </div>
            <div> <textarea onChange={updateNewMessageText} value={props.state.valueTextArea} placeholder="Enter your message here" /> </div>
            <div> <button className={s.styleButton} onClick={sendMessage}> Send </button> </div>
        </div>
    );
}

export default Dialogs