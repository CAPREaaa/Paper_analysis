/* eslint-disable react/no-unescaped-entities */
"use client"
  
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    //send the login request
    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
        router.push('/');
      } else {
        alert("Login failed")
      }

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Start your research journey!<br />Please login</h1>
          </div>
          <div className="max-w-sm mx-auto">
            <form onSubmit={onSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Username</label>
                  <input id="username" type="username" className="form-input w-full text-gray-800" placeholder="Enter your username" required 
                  value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <Link href="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Reset Password</Link>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required 
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
                </div>
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">
              Don't you have an account? <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
