import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    username: '',
    password:'',
}

const SignUp = () => {
    const history = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = evt => {
        setFormValues({
            ...formValues, [evt.target.name]: evt.target.value 
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        history.push('/');
        const newUser = {
            username: formValues.username,
            password: formValues.password,
        }
        axios.post('', newUser)
        .then(res => {
            console.log(res);
        })
        .catch((error) => {
            console.log('Error Here!', error)
        })
    };
    
    return (
        <form id='signUp-form' onSubmit={handleSubmit}>

            <div>
                <h2>Welcome to the African Marketplace Sign Up Page!</h2>
                <h3>Please complete the required information to create an account.</h3>

                <h4>Username:</h4>
                <label>
                    <input 
                        id='username-input'
                        value={formValues.username}
                        onChange={handleChange}
                        name='username'
                        type='text'
                    />
                </label>

                <h4>Password:</h4>
                <label>
                    <input 
                        id='password-input'
                        value={formValues.password}
                        onChange={handleChange}
                        name='password'
                        type='text'
                    />
                </label>
            </div>
            <div>
                <button type='submit' id='signUp-button'>Sign Up!</button>
                <button id='cancel-button'>Cancel</button>
            </div>
        </form>
    )
}

export default SignUp;