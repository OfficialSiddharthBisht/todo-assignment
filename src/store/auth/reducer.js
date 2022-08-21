import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, FEED_USERDETAILS, FEED_USERDETAILS_ERROR } from './actionTypes';

const initialState = {
    loading: false,
    error: false,
    token: null,
    message: "",
    userDetails: {}
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP_LOADING:
            return {
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                token: payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        // _________________________________
        case LOGOUT:
            return {
                ...initialState,
            }
        case FEED_USERDETAILS:
            return {
                ...state,
                error: false,
                userDetails: payload
            }
        case FEED_USERDETAILS_ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}