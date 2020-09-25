import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    return (
        <div className={s.dialog}>
            <img src="https://wegamers.176.com/GameIM/SNS/Image/20243059801580720092687308" alt=""/>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;