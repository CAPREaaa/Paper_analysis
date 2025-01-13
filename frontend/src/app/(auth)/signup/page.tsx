"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  // Use useState hook to store form field values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Handle form submission events
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>): Promise<void> =>{
    e.preventDefault(); // Prevent form default submission behavior


    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/register', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: name, 
          password: password,
          email: email,
          disabled: false, 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', name);
        router.push('/');
      } else {
        
        console.error('Registration failed');
      }
    } catch (error) {
      
      console.error('An error occurred:', error);
    }


  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome! Try to make your research life easier!</h1>
          </div>

          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required 
                  value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required 
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required 
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                </div>
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">
              Already having an account? <Link href="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
