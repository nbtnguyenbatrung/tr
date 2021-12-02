import * as types from "./actionType"

const initialState = {
    news: [],
    newss: {},
    error: null,
    id: ""
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_NEWS_START:
        case types.GET_SEARCH_NEWS_START:
        case types.GET_NEW_START:
            return {
                ...state,
                id: action.payload
            }
        case types.LOAD_NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload
            }
        case types.GET_NEW_SUCCESS:
            return {
                ...state,
                newss: action.payload
            }
        case types.GET_SEARCH_NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload
            }
        case types.LOAD_NEWS_ERROR:
        case types.GET_NEW_ERROR:
        case types.GET_SEARCH_NEWS_ERROR:
        default:
            return state

    }
}

export default usersReducers