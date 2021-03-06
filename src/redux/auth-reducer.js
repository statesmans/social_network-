const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null, 
    email: null,
    login: null,
    logo: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

switch (action.type) {
    case SET_USER_DATA: 
        return  ({...state, ...action.data, isAuth: true})

    default: return state
    }
}

export const setAuthUsersData = (userId, email, login, photo)=>{
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, photo}
    }
}

export default authReducer