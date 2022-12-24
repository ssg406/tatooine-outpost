import React from 'react';

const Alert = ({ error }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-red-900 py-4 px-8 rounded-md border-red-600 border-2 my-6'>
        {error?.message ? error.message : 'Something went wrong'}
      </div>
    </div>
  );
};

export default Alert;
