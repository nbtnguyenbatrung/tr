import * as types from "./actionType"

const initialState = {
    news: [],
    newss : {}
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NEWS:
            return {
                ...state,
                news: action.payload,
            }
        case types.POST_NEW:
        case types.GET_SEARCH_NEWS:
            return {
                ...state,
                news: action.payload,
            }
        case types.GET_NEW:
            return {
                ...state,
                newss: action.payload,
            }
        case types.GET_CONTACT:
            return {
                ...state,
                news: action.payload,
            }
        case types.POST_CONTACT:
        case types.PUT_CONTACT:
            return {
                ...state,
            }
        default:
            return state

    }
}

export default usersReducers