import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { apiURL } from '../util/apiURL'
export default function SignUp() {
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState(null)
    const [ password, setPassword ] = useState('');
    const history = useHistory();
    const API = apiURL();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            //sign up with firebase and send results to out backend
            history.push('/')
        } catch (err) {
            setError(err.message)
        }
        
    }
    return(
        <>
            <h1>Sign Up Page</h1>
            {error ? <div>{error}</div> : null}
            <form onSubmit={handleSubmit}>
                <input placeholder='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input placeholder='password'
                    type='passwordf'
                    value={password} 
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    autoComplete='on'
                />
                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}
