import React from 'react';
import s from './Post.module.css';

const Post = (props) => {


    return (
        <div className={s.item}>
            <div>
                <img src="http://www.poritsky.com/thecandlerblog/wp-content/uploads/2009/12/avatar-teaser-trailer-4.jpg" />
                <div>
                    {props.message}    
                </div>
                <span>
                    like {props.likesCount}
                </span>
            </div>
        </div>
    );
}
export default Post;