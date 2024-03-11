import React, { useState } from 'react';
import Style from './SignUpPage.module.css'
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        console.log('Sign-up successful');
    };

    return (
        <div className={Style.signupformparent}>
            <form onSubmit={handleSubmit} style={{
          width: "70%",
          padding: "35px",
          margin: "auto",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: "8px",
        }}>
                <h2 style={{color:"white",fontSize:"xx-large"}}>Sign Up</h2>
                {error && <p className="error-message">{error}</p>}
                
                    <h3>Username</h3>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                
                
                    <h3>Email</h3>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                
                
                    <h3>Password</h3>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                
                
                    <h3>Confirm Password</h3>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                
                <button type="submit">Sign Up</button>
            </form>
            <div className={Style.animages}>
            <h2 className={Style.login_quote}>Live your life by a compass, not a clock...</h2>
            <Link to='/LoginPage'style={{color:"white",fontWeight:"600"}}>Click to Login!</Link>
            </div>
        </div>
    );
};

export default SignUpPage;
