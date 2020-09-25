import React from 'react';
import Post from './Post/Post';
import { updateNewPostsTextActionCreator, addPostActionCreator } from '../../../redux/profile_reduce';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostsTextActionCreator(text)
        props.store.dispatch(action);
    }


    return (<MyPosts newPosts={state.newPosts}
        posts={state.profilePage.posts}
        addPost={addPost}
        onPostChange={onPostChange}
    />);
}


export default MyPostsContainer;