import React, { useState } from 'react';
import { Article, Author } from '@/app/types';
import Modal from './Modal';

const ITEMS_PER_PAGE = 4;
const MAX_VISIBLE_PAGES = 5;

const Table = ({ data }: { data: Article[] }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  
    const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const lastItemIndex = firstItemIndex + ITEMS_PER_PAGE;
    const currentData = data.slice(firstItemIndex, lastItemIndex);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
    // Pagination logic for showing page numbers and ellipses
    const paginationNumbers = () => {
      const pages = [];
      let startFromNumber = Math.max(currentPage - 2, 1);
      let goTillNumber = Math.min(currentPage + 2, totalPages);
      console.log(totalPages, goTillNumber)
  
      if (goTillNumber === totalPages) startFromNumber = Math.max(totalPages - 3, 1);

      for (let i = startFromNumber; i <= goTillNumber; i++) {
        pages.push(i);
      }
  
      return pages;
    };

    const getName = (author: Author) => {
        return author?.first_name + ' ' + author?.last_name || '';
    };

    const displayTitle = (title: string) => {
        return title.length > 50 ? title.slice(0, 50) + '...' : title;
    }

    return (
        <div className="w-full p-4">
            {currentData.map((item, index) => (
                <a key={index} 
                    href="#" 
                    className="block max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4"
                    onClick={() => {
                        setSelectedArticle(item);
                        setIsModalOpen(true);
                    }}
                >
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{displayTitle(item.title)}</h5>
                    <p className="font-normal text-sm text-gray-700 dark:text-gray-400">By {getName(item.authors[0])}</p>
                </a>
            ))}
        
        {data && 
            <div className="flex justify-center space-x-2 mt-4 max-w-sm">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className={`px-4 py-2 text-sm ${currentPage === 1 ? 'bg-gray-400' : 'bg-gray-200'}`}
                >
                    &lt;
                </button>

                {currentPage > 4 && (
                    <>
                        <button onClick={() => setCurrentPage(1)} className="px-4 py-2 text-sm bg-gray-200">1</button>
                        {currentPage > 4 && <span className="px-4 py-2">...</span>}
                    </>
                )}

                { paginationNumbers().map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`px-4 py-2 text-sm ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {pageNumber}
                    </button>
                ))}

                {totalPages > currentPage + 2 && (
                    <>
                        {totalPages > currentPage + 3 && <span className="px-4 py-2">...</span>}
                        <button onClick={() => setCurrentPage(totalPages)} className="px-4 py-2 text-sm bg-gray-200">{totalPages}</button>
                    </>
                )}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className={`px-4 py-2 text-sm ${currentPage === totalPages ? 'bg-gray-400' : 'bg-gray-200'}`}
                >
                    &gt;
                </button>
            </div>
        }

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} article={selectedArticle} />
        </div>

    );
};

export default Table;
