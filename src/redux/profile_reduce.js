const ADD_POST = "ADD-POST";
const UPDATE_NEW_POSTS_TEXT = "UPDATE-NEW-POSTS-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Hi, How are you?", likesCount: 12 },
        { id: 2, message: "It's you first post", likesCount: 23 }
    ],
    newPosts: 'World!'
}

const profileReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_POST:
            let item = {
                id: 3,
                message: state.newPosts,
                likesCount: 0
            }
            state.posts.push(item);
            state.newPosts = "";
            return state;
        case UPDATE_NEW_POSTS_TEXT:
            state.newPosts = actions.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostsTextActionCreator = (text) => ({
    type: UPDATE_NEW_POSTS_TEXT,
    newText: text
});

export default profileReducer;