import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../util/firebaseFunctions'

export default function Login() {
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState(null)
    const [ password, setPassword ] = useState('');
    const history = useHistory();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await login(email, password)
            // log in with firebase then change route
            history.push('/home')
        } catch (err) {
            setError(err.message)
        }  
    }
    return(
        <>
            <h1>Login Page</h1>
            {error ? <div>{error}</div> : null}
            <form onSubmit={handleSubmit}>
                <input placeholder='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input placeholder='password'
                    type='password'
                    value={password} 
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    autoComplete='on'
                />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}
