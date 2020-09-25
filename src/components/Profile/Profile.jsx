import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer 
                store={props.store}
            />
        </div>
    )
};

export default Profile;