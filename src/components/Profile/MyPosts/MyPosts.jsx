import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostsTextActionCreator, addPostActionCreator } from '../../../redux/profile_reduce';



const MyPosts = (props) => {
   
    let newPostsElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let postsItem = props.posts.map(item => <Post message={item.message} likesCount={item.likesCount} />)

    let onUpdatePosts = (e) => {
        let text = newPostsElement.current.value;
        props.onPostChange(text);
    }


    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <textarea ref={newPostsElement} value={props.newPosts} onChange={onUpdatePosts} />
            </div>
            <div>
                <button onClick={addPost} >add posts</button>
            </div>
            <div>
                {postsItem}
            </div>

        </div>
    );
}


export default MyPosts;