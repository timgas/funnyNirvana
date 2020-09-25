import React from 'react';
import s from "./Settings.module.css"
import Set from './Set';
import { addSettingsCreator, updateSettingsCreator } from '../../redux/settings_reducer';


const Settings = (props) => {
    let arr = props.state.setName.map(s => <Set name={s.name} />)

    let updateSet = (e) => {
        let text = e.target.value
        let action = updateSettingsCreator(text);
        props.dispatch(action);
    }

    let addSet = () => {
        let action = addSettingsCreator();
        props.dispatch(action);
    }
    return (
        <div className={s.item}>
            {arr}
            <textarea placeholder="Enter yout test settings" onChange={updateSet} value={props.state.newUpdateMessage} />
            <button onClick={addSet}> Click me and add new Settings</button>
        </div>
    )
}

export default Settings;