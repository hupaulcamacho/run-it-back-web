import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { apiURL } from '../util/apiURL';
import { signUp } from '../util/firebaseFunctions';

export default function SignUp() {
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState(null);
    const [ password, setPassword ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ file, setFile ] = useState(null)
    const history = useHistory();
    const API = apiURL();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            const fd = new FormData();
            fd.append('file', file);
            fd.append('email', email);
            fd.append('username', username);
            let res = await signUp(email, password)
            fd.append('id', res.user.uid);

            await axios.post(`${API}/api/users`, fd)
            //sign up with firebase and send results to out backend
            history.push('/home')
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
                /><br/>
                <input placeholder='username' 
                    value={username} 
                    onChange={(e) => setUsername(e.currentTarget.value)}
                /><br/>
                <input placeholder='password'
                    type='password'
                    value={password} 
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    autoComplete='on'
                /><br/>
                <input type='file' name='file' onChange={(e) => setFile(e.target.files[0])} /><br/>

                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}
