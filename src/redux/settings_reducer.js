const ADD_SETTINGS = "ADD_SETTINGS";
const UPDATE_SETTINGS = "UPDATE_SETTINGS"


let initialState = {
    setName: [{ name: "Setting Page" },
    { name: "Configuration Site" },
    { name: "Cooke Security" }],

    newUpdateMessage: ''
}
const settingsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_SETTINGS:
            let obj = {
                name: state.newUpdateMessage
            }
            state.setName.push(obj);
            state.newUpdateMessage = "";
            return state;
        case UPDATE_SETTINGS:
            state.newUpdateMessage = actions.text;
            return state;
        default:
            return state;
    }
}

export const addSettingsCreator = () => ({ type: ADD_SETTINGS });

export const updateSettingsCreator = (text) => {
    return {
        type: UPDATE_SETTINGS,
        text: text
    }
}


export default settingsReducer;

