const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let initialState = {      
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    

    switch(action.type) {
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followFlag: !u.followFlag}
                    }
                    return u
                })
            }  

        case UNFOLLOW: 
            return {
                ...state, 
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                         return {...u, followFlag: !u.followFlag}
                    }
                    return u
                })
            }  
        case SET_USERS: 
            return {
                ...state, 
                users:  [...action.users]
            } 
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT: 
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        default: return state
    }

}

export const followAC = (id) => ({type: FOLLOW, userId: id})
export const unfollowAC = (id) => ({type: UNFOLLOW, userId: id})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (usersCount) => ({type: SET_USERS_TOTAL_COUNT, usersCount})


export default usersReducer