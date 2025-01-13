/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [top, setTop] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const [username, setUsername] = useState('admin');

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  useEffect(() => {
    const username = localStorage.getItem('username') || '';
    const token = localStorage.getItem('token') || '';
    if (username && token) {
      setUsername(username);
      setShowNavigation(false);
    }
  }, []);

  function handleSignOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setShowNavigation(true);
    window.location.reload(); 
  }

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          <div className="flex-grow">
            <a href="/" className="text-black text-2xl font-bold">
              Paper Explorer
            </a>
          </div>

          {showNavigation ? (
            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                    <span>Sign up</span>
                  </Link>
                </li>
              </ul>
            </nav>
          ) : (
            <Menu as="div" className="relative ml-3">
              <div className="flex iterms-center">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm shadow hover:shadow-2xl">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <span className='mt-1.5 ml-3 mr-3 font-light text-gray-400'>Hi, {username}!</span>
              </div>
              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                {({ active }) => (
                  <Link
                    href="profile"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="upload"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                     Update Resouces

                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="resourcelist"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Resource List
                  </Link>
                )}
              </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(active ? 'bg-gray-100' : '', 'block w-full text-left px-4 py-2 text-sm text-gray-700')}
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}

          <MobileMenu />

        </div>
      </div>
    </header>
  );
}
