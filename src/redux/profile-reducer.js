const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {      
    posts: [{id: 1, message: "That song in my head sounds awesome", likesCount: 96 },
            {id: 2, message: "Look, what is a pill on ground?", likesCount: 12},],
    text: '',

    userInfo: {
        name: 'Yegor',
    }
}

const profileReducer = (state = initialState, action) => {
    

    switch(action.type) {
        
        case ADD_POST: {
            let newPost = {
                id: `${state.posts.length + 1}`,
                message: action.newText,
                likesCount: 0
            }
            
            return {
                ...state,
                posts: [...state.posts, newPost],
                text: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: { 
            return {
                ...state,
                text: action.newText
            }
        }
        default: return state
    }

}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        newText: text
    }
}

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer