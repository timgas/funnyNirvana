import profileReducer from "./profile_reduce";
import friendsReducer from "./friends_reducer";
import dialogsReducer from "./dialogs_reducer";
import settingsReducer from "./settings_reducer";

let store = {
    _callSubscriber() {
        console.log('Hello') // Функция заглушка, по сути она при рендере просто перезаписывается другой функцией
    },

    _state: {

        settingsPage: {
            setName: [{ name: "Setting Page" },
            { name: "Configuration Site" },
            { name: "Cooke Security" }],

            newUpdateMessage: ''
        },

        friendsBlock: {
            friends: [
                { name: 'Andrew' },
                { name: 'Sasha' },
                { name: "Sveta" }
            ]
        },

        profilePage: {
            posts: [
                { id: 1, message: "Hi, How are you?", likesCount: 12 },
                { id: 2, message: "It's you first post", likesCount: 23 }
            ],
            newPosts: 'World!'
        },

        dialogsPage: {
            dialogs: [{ id: "1", name: "Dima" },
            { id: "2", name: "Ivan" },
            { id: "3", name: "Valera" },
            { id: "4", name: "Sveta" },
            { id: "5", name: "Viktor" },
            { id: "6", name: "Grygorych" }
            ],

            messages: [{ id: "1", message: "Hi" },
            { id: "2", message: "Hey, Whats Up?" },
            { id: "3", message: "I'm fine thank you" },
            { id: "4", message: "Yo" },
            { id: "5", message: "Yo" },
            { id: "6", message: "Yo" }
            ],

            valueTextArea: ''
        }

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(actions) {

        this._state.profilePage = profileReducer(this._state.profilePage, actions);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, actions);
        this._state.friendsBlock = friendsReducer(this._state.friendsBlock, actions);
        this._state.settingsPage = settingsReducer(this._state.settingsPage, actions);

        this._callSubscriber();

    },

}

window.example = store._state.settingsPage.setName;



export default store;