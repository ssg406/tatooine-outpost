import React from 'react';
import ColumnSortItem from './ColumnSortItem';

const ColumnSortHeader = ({ attributeNames, handleSort }) => {
  return (
    <div className='grid grid-cols-4 border-b border-neutral-800 py-4'>
      {Object.keys(attributeNames).map((name, index) => {
        return (
          <ColumnSortItem
            attribute={attributeNames[name]}
            sortName={name}
            handleClick={handleSort}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ColumnSortHeader;
