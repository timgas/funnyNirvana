import React from 'react';
import Friend from './Friend/Friend';
import s from "./Friends.module.css";

const Friends = (props) => {

    let friendItem = props.state.friends.map(item => <Friend name={item.name} />)
    return (
        <div className={s.elem}>
            {friendItem}
        </div>
    )
}

export default Friends;