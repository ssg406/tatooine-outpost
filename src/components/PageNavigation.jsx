import React from 'react';

const PageNavigation = ({ count, page, hasNextPage, handlePageChange }) => {
  const totalPages = Math.ceil(count / 10);
  return (
    <div className='flex justify-center gap-6 items-center'>
      {page !== 1 && (
        <button onClick={() => handlePageChange(false)}>Previous</button>
      )}
      <span>
        Page {page} of {totalPages}
      </span>
      {hasNextPage && (
        <button onClick={() => handlePageChange(true)}>Next</button>
      )}
    </div>
  );
};

export default PageNavigation;
