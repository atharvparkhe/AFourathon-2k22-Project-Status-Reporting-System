import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigateTo = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const user = useSelector(state => state.user);
    const token = useSelector(state => state.auth.token);
    const state = useSelector(state => state)
console.log(state);



    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        try {
            await dispatch(login(username, password));
            setUsername('');
            setPassword('');
            // redirect to home page
            navigateTo('/')




        } catch (err) {
            setError(err);
        }
    };

    return (
        <div  style={{"paddingTop": "100px"}}>
            {loading && <p>Loading...</p>}
            {user && <p>Welcome, {user.name}</p>}
            {error && <p>{error}</p>}
            {token && <p>{token}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;
