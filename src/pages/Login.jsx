import React, { useState } from 'react'

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginHandling = (e) => {
    e.preventDefault();
    console.log(email, password);
    alert(`Your email: ${email}`);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='login-form'>

      <form onSubmit={LoginHandling}>
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
