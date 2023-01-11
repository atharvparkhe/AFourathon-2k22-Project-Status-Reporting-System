import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './actionTypes';
import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const res = await axios.post(`/api/login`, { username, password });
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
    }
};

export const logout = () => {
    return { type: LOGOUT_SUCCESS };
};
