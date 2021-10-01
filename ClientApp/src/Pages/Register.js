
import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from "react-router-dom";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('/api/Auth/register', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    name,
                    email,
                    password
                }
            )
        });
        //const content = await response.json();
        //console.log(content);

        setRedirect(true);
    }
    if (redirect) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="container p-5 text-center">
            <form className="form-signin" onSubmit={submit}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

                <input className="form-control mb-3" placeholder="Name" required
                    onChange={e => setName(e.target.value)}
                />


                <input type="email" className="form-control mb-3" placeholder="Email address" required onChange={e => setEmail(e.target.value)} />


                <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                <br></br>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>


            </form>
        </div>

    );
};