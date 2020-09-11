import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import { logout } from '../util/firebaseFunctions'

import { AuthContext } from '../providers/AuthContext';

export default function NavBar() {
    const { currentUser } = useContext(AuthContext);
    const displayButtons = () => {
        if(currentUser) {
            return <button onClick={logout}>Logout</button>
        } else {
            return(
                <>
                    <NavLink to={'/login'}>Log In</NavLink>
                    <NavLink to={'/signup'}>Sign Up</NavLink>
                </>
            )
        }
    }
    return (
        <nav>
            <NavLink exact to={'/'}>Home</NavLink>
            <NavLink to={'/users'}>Show All Users</NavLink>
            {displayButtons()}
        </nav>
    )
}
