import { LOGIN_SUCCESS, LOGOUT_SUCCESS, INVALID_TOKEN } from '../actions/actionTypes';

const initialState = {
    token: '',
};

export default function auth(state = initialState, action) {
    
      
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token.token);
            localStorage.setItem('user', action.payload.email);
            return {
                ...state,
                token: action.payload.token.token,
                loading: false,
                isAuthenticated: true,
                email: action.payload.email
            }

        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return { ...initialState };
        case INVALID_TOKEN:
            return { ...initialState };
        default:
            return state;
    }
}
