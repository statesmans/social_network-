const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS'

let initialState = {      
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    } else {
                        return u
                    }
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
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS: 
            return {
                ...state, 
                followingProgress: action.isFetching ? 
                    [...state.followingProgress, action.userId] :
                    state.followingProgress.filter( id => id !== action.userId)
            }

        default: return state
    }

}

export const follow = (id) => ({type: FOLLOW, userId: id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (usersCount) => ({type: SET_USERS_TOTAL_COUNT, usersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

export default usersReducer