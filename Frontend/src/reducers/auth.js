import { LOGIN_SUCCESS, LOGOUT_SUCCESS, INVALID_TOKEN } from '../actions/actionTypes';

const initialState = {
    token: '',
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, token: action.payload.token };
        case LOGOUT_SUCCESS:
            return { ...initialState };
        case INVALID_TOKEN:
            return { ...initialState };
        default:
            return state;
    }
}
