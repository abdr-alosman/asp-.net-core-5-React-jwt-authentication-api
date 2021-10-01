import React, { useEffect, useState } from 'react';



import { Link } from 'react-router-dom';
export const Home = () => {
    const [name, setName] = useState("");
    

    const logout = async () => {
        await fetch('/api/Auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'

        });


    };

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/Auth/user', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',

            });
            const content = await response.json();
            setName(content.name);


        }

        )();

    });

    
    return (
        
                

        <div className="container p-5 text-center">
            {name ? 'Hi ' + " " + name  : 'You are not logged in'}
            < Link className="nav-link" to="/login" onClick={logout} > Logout</Link>

            
            
        </div>

    );
};