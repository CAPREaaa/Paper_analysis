import { Article } from "../types";

// Modal.js
const Modal = ({ isOpen, onClose, article }: {isOpen: boolean, onClose: () => void, article: Article | null}) => {
    if (!isOpen) return null;
  
    return (
        <>
        {article && (
        
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded-lg max-w-lg w-full">
              <button 
                    onClick={onClose} 
                    className="float-right items-center justify-center w-7 h-7 font-bold text-white bg-gray-500 hover:bg-gray-600 p-1 rounded-full transition duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-opacity-50"
                >
                    X
                </button>
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="mb-4">By {article.authors.map((author) => author.first_name).join(", ")}</p>
                {/* Add more article details here */}
                <div className="text-gray-700">
                  <p>Citation Count: {article.citation_count}</p>
                  <p>Published Date: {article.published_date}</p>
                  <p>DOI: {article.doi}</p>
                  {/* Add any other information you wish to include */}
                </div>
              </div>
            </div>
        )}
        </>
    );
  };
  
  export default Modal;
  