import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer"



let reducePatch = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducePatch);

export default store