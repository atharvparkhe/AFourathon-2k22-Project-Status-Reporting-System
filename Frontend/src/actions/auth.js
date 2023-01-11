import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './actionTypes';
import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
    const BASE_URL = 'http://127.0.0.1:8000/'
    try {
        dispatch({ type: LOGIN_REQUEST });
        const res = await axios.post(`${BASE_URL}api/auth/admin-login/`, { email: username, password });
        console.log(res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: {email: username, token: res.data} });
    } catch (error) {
        console.log("error", error)
        dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error.toString() });

    }
};

export const logout = () => {
    return { type: LOGOUT_SUCCESS };
};
