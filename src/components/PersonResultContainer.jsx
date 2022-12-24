import React from 'react';
import PersonResult from './PersonResult';
import ColumnSortHeader from './ColumnSortHeader';

const PersonResultContainer = ({ dataset, handleSort }) => {
  const attributeNames = {
    name: 'name',
    hair_color: 'hair',
    height: 'height',
    mass: 'mass',
  };
  return (
    <main className='md:container md:mx-auto px-4 my-16'>
      <ColumnSortHeader
        attributeNames={attributeNames}
        handleSort={handleSort}
      />
      <ul>
        {dataset.map((person, index) => {
          return <PersonResult key={index} attributes={person} />;
        })}
      </ul>
    </main>
  );
};

export default PersonResultContainer;
