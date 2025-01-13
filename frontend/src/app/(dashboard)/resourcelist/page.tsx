/* eslint no-use-before-define: 0 */
"use client"
import React, { ChangeEvent, useRef, useState, FormEvent, useEffect } from 'react';

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
import withAuth from '../withAuth';

const navigation = [
    { name: 'Profile', href: '/profile', icon: UsersIcon, current: false },
    { name: 'Documents', href: '/upload', icon: DocumentArrowUpIcon, current: false },
    { name: 'Resource List', href: '/resourcelist', icon: DocumentDuplicateIcon, current: true },
    { name: 'Home', href: '/', icon: HomeIcon, current: false },
]

const article = []

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const UploadFiles = () => {

    const [article, setArticle] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/query/articles');
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const data = await response.json();
                setArticle(data);
                console.log("Articles fetched successfully:", data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
        fetchArticles();
    }, []);


    const [filteredArticles, setFilteredArticles] = useState(article);
    const [searchQuery, setSearchQuery] = useState('');





    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!searchQuery.trim()) {
            setFilteredArticles(article);
            return;
        }

        // Filter the article list
        const filtered = article.filter(paper =>
            paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.authors.some(author => {
                const fullName = author.first_name && author.last_name
                    ? `${author.first_name} ${author.last_name}`
                    : '';
                return fullName.toLowerCase().includes(searchQuery.toLowerCase());
            }) ||
            paper.doi.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filtered.length === 0 && searchQuery) {
            // If no content is found, a prompt window will pop up.
            alert("No articles found for your search query.");
        } else {
            // Update status to show searched articles
            setFilteredArticles(filtered);
            console.log("Filtered articles:", filtered);
        }

    };

    const handleDelete = async (articleToDelete) => {
        if (window.confirm(`Are you sure you want to delete this article?`)) {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/delete/article/${articleToDelete.id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setArticle(prevArticles => prevArticles.filter(article => article.id !== articleToDelete.id));
                    setFilteredArticles(prevArticles => prevArticles.filter(article => article.id !== articleToDelete.id));
                    alert('Article deleted successfully.');
                } else {
                    throw new Error('Failed to delete the article.');
                }
            } catch (error) {
                console.error('Error deleting article:', error);
                alert('An error occurred while deleting the article.');
            }
        }
    };

    const [editingArticle, setEditingArticle] = useState(null);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

    const handleEdit = (articleToEdit) => {
        setIsEditPopupOpen(true);
        const articleCopy = JSON.parse(JSON.stringify(articleToEdit));
        setEditingArticle(articleCopy);
    };

    const closeEditPopup = () => setIsEditPopupOpen(false);

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/edit/article/${editingArticle.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingArticle),
            });

            if (!response.ok) {
                throw new Error('Failed to update the article.');
            }
            alert('Article updated successfully.');
            setIsEditPopupOpen(false);
            setArticle(prevArticles => prevArticles.map(article => article.id === editingArticle.id ? editingArticle : article));
            setFilteredArticles(prevArticles => prevArticles.map(article => article.id === editingArticle.id ? editingArticle : article));
        } catch (error) {
            console.error('Error updating article:', error);
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

                <main className={`py-10 lg:pl-72 ${isEditPopupOpen ? 'opacity-20' : ''}`}>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <form className="flex gap-x-4" onSubmit={handleSearchSubmit}>
                            <label htmlFor="paper-info" className="sr-only">
                                Paper Info
                            </label>
                            <input
                                id="paper-info"
                                name="paper-info"
                                type="text"
                                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter the title/author/DOI of the paper you are looking for"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Search
                            </button>
                        </form>


                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle">
                                    <table className="min-w-full border-separate border-spacing-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                                >
                                                    Title
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                                >
                                                    First Author
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                                >
                                                    DOI
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                                >
                                                    Published Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                                >
                                                    Operation
                                                </th>
                                            </tr>
                                        </thead>


                                        {filteredArticles.length > 0 ? (
                                            <tbody>
                                                {filteredArticles.map((paper, paperIdx) => (
                                                    <tr key={paper.id}>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                                                            )} style={{
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: '120px',
                                                            }}
                                                        >
                                                            {paper.title}
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                                                            )} style={{
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: '120px',
                                                            }}
                                                        >
                                                           {paper.authors && paper.authors.length > 0 ? `${paper.authors[0].first_name} ${paper.authors[0].last_name}` : "NO AUTHORS FOUND"}
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                                                            )} style={{
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: '120px',
                                                            }}
                                                        >
                                                            {paper.doi}
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                                                            )} style={{
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: '120px',
                                                            }}
                                                        >
                                                            {paper.published_date}
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap py-4 pr-4 pl-3  text-sm font-medium sm:pr-8 lg:pr-8'
                                                            )}
                                                        >
                                                            <button
                                                                onClick={() => handleDelete(paper)}
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                Delete
                                                            </button>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <button
                                                                onClick={() => handleEdit(paper)}
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                Edit
                                                            </button>

                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        ) : (
                                            <tbody>
                                                {article.map((paper, paperIdx) => (
                                                    <tr key={paper.id}>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                                                            )} style={{
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: '120px',
                                                            }}
                                                        >
                                                            {paper.title}
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                                                            )} style={{
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: '120px',
                                                            }}
                                                        >
                                                          {paper.authors && paper.authors.length > 0 ? `${paper.authors[0].first_name} ${paper.authors[0].last_name}` : "NO AUTHORS FOUND"}
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                                                            )} style={{
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: '120px',
                                                            }}
                                                        >
                                                            {paper.doi}
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                                                            )} style={{
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: '120px',
                                                            }}
                                                        >
                                                            {paper.published_date}
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                paperIdx !== article.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap py-4 pr-4 pl-3  text-sm font-medium sm:pr-8 lg:pr-8'
                                                            )}
                                                        >
                                                            <button
                                                                onClick={() => handleDelete(paper)}
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                Delete
                                                            </button>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <button
                                                                onClick={() => handleEdit(paper)}
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                Edit
                                                            </button>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        )}

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>





                {/* Popup Page */}
                {isEditPopupOpen && (
                    <main className="fixed lg:pl-80 lg:pr-40 fixed z-70 inset-14 " style={{
                        top: '12%',
                        maxHeight: '700px', // Set a fixed maximum height
                        overflow: 'auto',
                    }}>
                        <div className='bg-white p-10 rounded-lg shadow-2xl'>
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Article Information</h2>
                            </div>

                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 mt-3">Title</dt>
                                        <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <textarea
                                                id="title"
                                                rows="3"
                                                value={editingArticle?.title || 'NOT FOUND'}
                                                onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-500"
                                            />

                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 mt-3">Authors</dt>
                                        <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <div className="mt-1 block w-full flex items-center space-x-3">
                                                {editingArticle.authors.slice(0, 3).map((author, index) => (
                                                    <span key={index} className="mt-1 block focus:ring-indigo-600 focus:border-indigo-500">
                                                       {author.first_name && author.last_name ? `${author.first_name} ${author.last_name};` : ""}
                                                    </span>
                                                ))}
                                                {editingArticle.authors.length > 3 && (
                                                    <span className="mt-1 block focus:ring-indigo-600 focus:border-indigo-50">.........</span>
                                                )}
                                            </div>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 mt-3">Keywords</dt>
                                        <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <div className="mt-1 flex block w-full items-center space-x-3">
                                                {editingArticle.keywords.slice(0,4).map((keyword, index) => (
                                                    <span key={index} className="mt-1 block focus:ring-indigo-600 focus:border-indigo-500">
                                                        {keyword};
                                                    </span>
                                                ))}
                                            </div>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 mt-3">Abstract</dt>
                                        <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <textarea
                                                id="abstract"
                                                rows='6'
                                                value={editingArticle?.abstract || 'NOT FOUND'}
                                                onChange={(e) => setEditingArticle({ ...editingArticle, abstract: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-500"

                                            />

                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 mt-3">DOI</dt>
                                        <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <textarea
                                                id="doi"
                                                rows='1'
                                                value={editingArticle?.doi || 'NOT FOUND'}
                                                onChange={(e) => setEditingArticle({ ...editingArticle, doi: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-500"
                                            />

                                        </dd>
                                    </div>

                                </dl>
                            </div>


                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button onClick={closeEditPopup} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Save
                                </button>
                            </div>

                        </div>


                    </main>
                )}

            </div>
        </>
    )
}


export default withAuth(UploadFiles);