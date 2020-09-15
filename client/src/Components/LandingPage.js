import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(params) {
    return(
        <div className='landing-main'>
            <h1>Run it back</h1>

            <Link to='/login'>
                <button>Log In</button>
            </Link>
            <Link to='/signup'>
                <button>Sign Up</button>
            </Link>
        </div>
    )
}