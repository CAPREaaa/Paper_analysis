'use client'

import { useState } from 'react';
import { RiSearch2Line } from "react-icons/ri";

import { useRouter } from 'next/navigation';

const SearchBar = ({ onSearch, term = '' }: { onSearch: (aspect: string, term: string) => void, term: string }) => {
  const [searchTerm, setSearchTerm] = useState(term || '');
  const [searchAspect, setSearchAspect] = useState('key');

  const router = useRouter();

  const handleSearch = () => {

    if (!searchTerm) return;
    try {
      onSearch(searchAspect, searchTerm);
      router.replace(`/search?aspect=${searchAspect}&term=${searchTerm}`);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <section className="relative">   
      <div className="flex items-center space-x-2 bg-white shadow-md rounded-md overflow-hidden">
          <select
            className="bg-gray-50 border border-r-0 border-gray-300 text-gray-700 py-2 px-8 block w-auto focus:ring-blue-500"
            value={searchAspect}
            onChange={(e) => setSearchAspect(e.target.value)}
          >
            <option value="key">Title/DOI</option>
            <option value="author">Author</option>
            <option value="keyword">Keyword</option>
          </select>
          
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-full bg-white border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <button
            onClick={() => handleSearch()}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 focus:shadow-outline"
          >
            Search 
            <RiSearch2Line className='ml-2 w-4 h-4' />
          </button>
        </div>


    </section>
  );
};

export default SearchBar;
