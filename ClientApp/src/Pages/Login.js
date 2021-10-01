
import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from "react-router-dom";



export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('/api/Auth/login', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(
                {

                    email,
                    password
                }
            )
        });
        setRedirect(true);
    }
    if (redirect) {
        return <Redirect to="/" />;
    }
    return (
        <div className="container p-5 text-center">
            <form className="form-signin" onSubmit={submit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>


                <input type="email" className="form-control mb-3" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)}
                />


                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />
                <br></br>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>


            </form>
        </div>

    );
};