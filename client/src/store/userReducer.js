const SET_USER = 'SET_USER'
const SET_IS_AUTH = 'SET_IS_AUTH'
let defaultState = {
    user: {},
    isAuth: false,
}
export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth:action.bool
            }
        default:
            return state
    }
}
export const setUserAC = (user) => {
    return { type: SET_USER, user }
}
export const setIsAuthAC = (bool)=>{
    return {type: SET_IS_AUTH, bool }
}
