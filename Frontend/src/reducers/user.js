import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/actionTypes';

const initialState = {
    user: {
        
    },
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token.token);
            return {
                ...state,
                token: action.payload.token.token,
                loading: false,
                isAuthenticated: true,
                email: action.payload.email
            }
        case LOGOUT_SUCCESS:
            return { ...initialState };
        default:
            return state;
    }
}
