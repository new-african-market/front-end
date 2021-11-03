import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const { push } = useHistory();
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        push('/');
        axios.post('', user)
        .then(res => {
            console.log(res.data);
            //localStorage.setItem('token', res.data.token);
        }).catch(error => {
            console.log('Error here!', error);
            //setError('The username or password is not correct!')
        })
    }

    return (
        <form id='signUp-form' onSubmit={handleSubmit}>

            <div>
                <h2>Welcome Back to the African Marketplace Login Page!</h2>
                <h3>Please complete the required information to Login!</h3>

                <h4>Username:</h4>
                <label>
                    <input 
                        id='username-input'
                        value={user.username}
                        onChange={handleChange}
                        name='username'
                        type='text'
                    />
                </label>

                <h4>Password:</h4>
                <label>
                    <input 
                        id='password-input'
                        value={user.password}
                        onChange={handleChange}
                        name='password'
                        type='text'
                    />
                </label>
            </div>
            <div>
                <button type='submit' id='signUp-button'>Login!</button>
            </div>
        </form>
    )
}

export default Login;