import React from 'react';
import PlanetResult from './PlanetResult';
import ColumnSortHeader from './ColumnSortHeader';

const PlanetResultContainer = ({ dataset, handleSort }) => {
  const attributeNames = {
    name: 'name',
    rotation_period: 'day',
    climate: 'climate',
    population: 'population',
  };
  return (
    <main className='md:container md:mx-auto px-4 my-16'>
      <ColumnSortHeader
        attributeNames={attributeNames}
        handleSort={handleSort}
      />
      <ul>
        {dataset.map((planet, index) => {
          return <PlanetResult key={index} attributes={planet} />;
        })}
      </ul>
    </main>
  );
};

export default PlanetResultContainer;
