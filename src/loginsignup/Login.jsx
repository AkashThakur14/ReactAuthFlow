import React, { useState } from 'react'

export const Login = () => {

    const userDetail ={
        email:"",
        password:""
    }

const [data, setData]=useState('userDetail');

const handelLoginInput = (e)=> {
    e.preventDefault();
   console.log(e.target.value)
   console.log(e.target.name)
   console.log(e.target.password)

}

    return (
        <div className='login-container'>

            <form className='login-form'>
                <div className='login-header'>
                    <h1>Log In</h1>
                    <p>Welcome back! Please enter your credentials.</p>
                </div>

                <div className='login-fields'>
                    <input type="email" name="email" id="email" placeholder='Email'   onChange={handelLoginInput}/>
                    <input type="password" name="password" id="password" placeholder='Password'   onChange={handelLoginInput}/>
                    <button type='submit'>Log In</button>
                </div>

                <div className='login-footer'>
                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>
            </form>

        </div>
    )
}

