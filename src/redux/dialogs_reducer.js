const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";


let initialState = {
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

const dialogsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_NEW_MESSAGE:
            let obj = {
                id: 7,
                message: state.valueTextArea
            }
            state.messages.push(obj);
            state.valueTextArea = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.valueTextArea = actions.text;
            return state;
        default:
            return state;
    }
}

export const updageMessageActionCreator = (text) =>  ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });


export const addNewMessageActionCreator = () => {
     return {
        type: ADD_NEW_MESSAGE,
    }
}


export default dialogsReducer;