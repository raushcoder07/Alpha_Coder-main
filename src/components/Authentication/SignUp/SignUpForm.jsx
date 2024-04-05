"use client";
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '@/components/firebase/firebaseInit';
import { getDatabase, ref, set, get } from 'firebase/database';
import Link from 'next/link';
import '../auth.css'
import firebaseApp from '@/firebase';
import { db } from "../../../components/firebase/firebaseInit";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    try {
      // Create a new user in Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firebase Realtime Database
      const userData = {
        username: username,
        cash: 0,
        coins: 0,
        UseableCash: 0,
        transactionHistory: [{
          stockName:"",
          purchased:0,
          quntity:0,
          total:0,
        }]
      };
      await set(ref(db, `users/${user.uid}`), userData);

      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };


  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    const fetchData = async () => {
      const db = getDatabase(firebaseApp);
      const dataRef = ref(db, 'data'); // 'data' is the path to your data in the database
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log('No data available');
      }
    };

    fetchData();
  }, []);

 

  return (
    <div className='wrapper'>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required onChange={(e) => setUsername(e.target.value)} />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
          <FaEnvelope className='icon' />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
          <FaLock className='icon' />
        </div>

        <button type='submit' >Sign Up</button>

        <div className='register-link'>
          <p>Already have an account?<Link href='/login'>Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;