"use client"

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { signInWithEmailAndPassword } from "firebase/auth";

import '../auth.css';
import { auth } from '@/components/firebase/firebaseInit';
import Link from 'next/link';
// import { useRouter } from 'next/router';


const LoginForm = ({ isAuthenticated }) => {

    // const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = async (e) => {
        e.preventDefault();

        try {
            // Disable the submit button while processing
            setSubmitButtonDisabled(true);

            // Sign in with Firebase authentication
            await signInWithEmailAndPassword(auth, email, password);

            // If successful, display an alert (you can replace this with any other UI feedback)
            alert('Login successful!');
            isAuthenticated = true;

            // You can also redirect the user to another page or perform additional actions

        } catch (error) {
            // If there's an error during authentication, update the error message
            setErrorMsg(error.message);

            // Enable the submit button again
            setSubmitButtonDisabled(false);
        }
    };

    return (

        <>
            <div className='wrapper'>
                <form onSubmit={handleSubmission}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='#'>Forgot Password</a>
                    </div>

                    {errorMsg && <div className="error-msg">{errorMsg}</div>}

                    <button type='submit' disabled={submitButtonDisabled}>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account?<a href='/signup'>Register</a></p>
                    </div>
                </form>
            </div>


        </>
    );
};

export default LoginForm;