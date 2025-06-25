import React, { useState } from 'react'

export const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handelInput = (e) => {
        e.preventDefault();
        console.log(name,email,password)
    }

    return (
        <div className='signup-form'>

            <form onSubmit={handelInput}>
                <div className='sign-head'>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                </div>

                <div className='account-details'>
                    <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Sign Up</button>
                </div>
                <div className='sign-bottom-text'>
                    <p>Already have account? <a href="/login">Log In</a></p>
                </div>
            </form>

        </div>
    )
}

