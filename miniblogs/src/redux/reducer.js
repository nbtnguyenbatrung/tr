import * as types from "./actionType"

const initialState = {
    news: [],
    loading: true
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NEWS:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case types.POST_NEW:
        case types.GET_SEARCH_NEWS:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case types.GET_CONTACT:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case types.POST_CONTACT:
        case types.PUT_CONTACT:
            return {
                ...state,
                loading: false
            }
        default:
            return state

    }
}

export default usersReducers