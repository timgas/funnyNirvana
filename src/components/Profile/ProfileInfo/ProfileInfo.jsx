import React from 'react';
import style from './ProfileInfo.module.css';



function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU"></img>
            </div>
            <div className={style.descriptorBlock}>
                avatar + description
            </div>
        </div>);
};

export default ProfileInfo;