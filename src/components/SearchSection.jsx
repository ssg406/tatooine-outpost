import React from 'react';
import PlanetResultContainer from './PlanetResultContainer';
import PersonResultContainer from './PersonResultContainer';
import ShipResultContainer from './ShipResultContainer';

const SearchSection = ({ category, dataset, handleSort }) => {
  switch (category) {
    case 'planets':
      return (
        <PlanetResultContainer dataset={dataset} handleSort={handleSort} />
      );
    case 'starships':
      return <ShipResultContainer dataset={dataset} handleSort={handleSort} />;
    case 'people':
    default:
      return (
        <PersonResultContainer dataset={dataset} handleSort={handleSort} />
      );
  }
};

export default SearchSection;
