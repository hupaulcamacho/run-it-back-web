import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/AuthContext';
import { apiURL } from '../util/apiURL'

export default function Home(params) {
    const [ user, setUser ] = useState('')
    const API = apiURL();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async() => {
            let res = await axios.get(`${API}/api/users/id/${currentUser.id}`)
            setUser(res.data.user[0])
        }
        fetchUser()
    })

    return(
        <div className='landing-main'>
            Homepage
            <div className='home-main'>
                <div className='user-cont'>
                    <p>{user.username}</p>
                    <img src={user.profile_img} width='100px' />
                </div>
                <div className='new-content'>
                    
                </div>
            </div>
        </div>
    )
}
