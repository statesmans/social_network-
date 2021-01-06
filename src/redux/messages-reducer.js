

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, userName: 'Yegor', message: "Hi, what's cooking?" },
        {id: 2, userName: 'Andrey', message: "Oh, i'm fine? thanks" },
        {id: 3, userName: 'Yegor', message: "BlaBlaBlaBla" },
        {id: 4, userName: 'Andrey', message: "You looks crazy!" },],

    message_text: "",

    dialogs: [
      {id: 1, name: 'Andrey'},
      {id: 2, name: 'Petya'},
      {id: 3, name: 'Leha'},
      {id: 4, name: 'Vasya'},
      {id: 5, name: 'Igor'},
      {id: 6, name: 'Yegor'},
      {id: 7, name: 'Valera'},
      {id: 8, name: 'Gerasim'},
      {id: 9, name: 'Petya'},
      {id: 10, name: 'Dmitry'},
    ] 
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = { 
                id: `${state.messages.length + 1}`,
                userName: 'Yegor',
                message: `${action.newText.slice(0, -1)}`
            }

            return {
                ...state,
                messages: [...state.messages, newMessage],
                message_text: ''
               }
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                message_text: action.newText
            }
        }
        default: return state
    }
}

export const addMessageActionCreator = (text)=>{
    return {
        type: ADD_MESSAGE,
        newText: text
    }
}

export const updateNewMessageActionCreator = (text)=>{
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default messagesReducer