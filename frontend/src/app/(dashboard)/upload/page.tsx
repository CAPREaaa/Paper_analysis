"use client"
import React, { ChangeEvent, useRef, useState } from 'react';
import Logo from '../../components/Logo';
import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/20/solid'
import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    DocumentArrowUpIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import withAuth from '../withAuth';

const navigation = [
    { name: 'Profile', href: '/profile', icon: UsersIcon, current: false },
    { name: 'Documents', href: '/upload', icon: DocumentArrowUpIcon, current: true },
    { name: 'Resource List', href: '/resourcelist', icon: DocumentDuplicateIcon, current: false },
    { name: 'Home', href: '/', icon: HomeIcon, current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const UploadFiles = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files).map(file => ({
                name: file.name,
                type: file.type,
                size: file.size,
            }));
            setSelectedFiles(filesArray);
        } else {
            setSelectedFiles([]);
        }
    };

    const handleDivClick = () => {
        fileInputRef.current.click(); // Trigger hidden input click event
    };

    const handleUploadClick = async () => {
        if (selectedFiles && selectedFiles.length > 0) {
            // Create a FormData object
            const formData = new FormData();
            const files = fileInputRef.current.files;
            if (files) {

                setIsLoading(true); // Start loading

                // Iterate through all selected files and add them to the form data object
                Array.from(files).forEach(file => {
                    formData.append('files', file); // 'files' is the parameter name of the backend receiving files
                });
                // Use the fetch API to send a POST request containing the file to the backend
                try {
                    const response = await fetch('http://localhost:8000/api/v1/query/files/', {
                        method: 'POST',
                        body: formData, // Use FormData object as request body
                        // Note: When using FormData, do not set the 'Content-Type' header, the browser will set it automatically
                    });

                    if (response.ok) {
                        const data = await response.json();

                        if (data.length === 0) {
                            alert('Sorry none of the articles could be processed');
                        } else if (data.length > 0 && data.length < selectedFiles.length) {
                            alert('Some of the articles could not be processed');
                        } else {
                            alert('All articles processed successfully');
                        }

                        setSelectedFiles([]);

                    } else {
                        console.error('Upload failed', response.statusText);
                        alert('Upload failed');
                    }
                } catch (error) {
                    alert('Upload failed');
                    console.error('Error:', error);
                } finally {
                    setIsLoading(false); // Stop loading
                }
            }
        }

    };

    return (
        <>
            <div>
                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                        <div className="flex h-16 shrink-0 items-center">
                            <div className="shrink-0 mr-4">
                                <Logo />
                            </div>

                            <div className="flex-grow">
                                <a href="/" className="text-black text-2xl font-bold">
                                    Paper Explorer
                                </a>
                            </div>
                        </div>

                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-50 text-blue-600'
                                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600',
                                                            'h-6 w-6 shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>

                <main className="py-10 lg:pl-72 mt-20 mr-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div onClick={handleDivClick} role="button">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                </svg>
                                <h3 className="mt-2 text-sm font-semibold text-gray-900">Click here to select files</h3>
                                <input type="file" ref={fileInputRef} multiple accept=".pdf, .doc, .docx" onChange={handleFileChange} style={{ display: 'none' }} />
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Uploading pdf or doc files.</p>

                            {selectedFiles.length > 0 && (
                                <div className="mt-4 grid grid-cols-5  " style={{
                                    border: '2px dashed #ccc',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    maxHeight: '300px', // Set a fixed maximum height
                                    overflow: 'auto',
                                }}>
                                    {selectedFiles.map((file, index) => (

                                        <div key={index} className="flex flex-col items-center p-4 shadow-lg rounded-lg" style={{
                                            minWidth: '90px', // Make sure cells within the grid have a minimum width
                                        }}>
                                            <DocumentArrowUpIcon className="h-9 w-9 " aria-hidden="true" />
                                            <p className="mt-2 text-sm font-medium text-gray-900" style={{
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                maxWidth: '90px',
                                                textAlign: 'center'
                                            }}>{file.name}</p>
                                            <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                                        </div>

                                    ))}

                                </div>
                            )}

                            {isLoading ? (
                                <div className="inline-flex items-center rounded-md  px-3 py-2 text-xl font-semibold text-black ">Processing with gusto... </div> 
                            ) : (
                                <div className="mt-6">
                                    <button onClick={handleUploadClick} className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                        <ArrowUpIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                        Upload files
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>



                </main>



            </div>
        </>
    )
}

export default withAuth(UploadFiles);