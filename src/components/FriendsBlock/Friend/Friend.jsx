import React from "react";
import s from "./Friend.module.css"
const Friend = (props) => {
    return (
        <div className={s.content}>
            <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt="аватарка"/>
            <div>{props.name}</div>
            
        </div>
    )
}

export default Friend;