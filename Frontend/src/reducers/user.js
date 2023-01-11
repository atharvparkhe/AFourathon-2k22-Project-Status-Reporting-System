import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/actionTypes';

const initialState = {
    user: {},
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload.data };
        case LOGOUT_SUCCESS:
            return { ...initialState };
        default:
            return state;
    }
}
