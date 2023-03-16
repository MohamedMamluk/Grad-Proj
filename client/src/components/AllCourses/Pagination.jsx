import React, { useState } from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [pageNumbers, setPageNumbers] = useState([]);

  // Create an array of page numbers based on the total number of pages
  React.useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
  }, [totalPages]);

  return (
    <div className='flex justify-center w-full my-4 '>
      <nav>
        <ul className='pagination flex flex-wrap !w-full'>
          {pageNumbers.map((number) => (
            <li key={number} className='page-item flex-1'>
              <button
                className={`page-link w-full ${
                  currentPage === number
                    ? '!bg-blue-500 text-white'
                    : 'text-gray-500 hover:text-blue-500'
                }`}
                onClick={() => {
                  onPageChange(number);
                }}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
