const { createStore, combineReducers } = require("redux");
const { default: settingsReducer } = require("./settings_reducer");
const { default: dialogsReducer } = require("./dialogs_reducer");
const { default: friendsReducer } = require("./friends_reducer");
const { default: profileReducer } = require("./profile_reduce");

let reducers = combineReducers({
    //Передаем редьюсеры, в одну кучу которые принимают state и action и 
    // применяют action к этим state и возвращают новый state,
    // если action не подходят просто возвращают старый state !!!!!!!!
    dialogsPage: dialogsReducer,
    friendsBlock: friendsReducer,
    profilePage: profileReducer,
    settingsPage: settingsReducer

})

let store = createStore(reducers);

export default store;
