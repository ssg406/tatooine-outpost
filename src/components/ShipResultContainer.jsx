import ColumnSortHeader from './ColumnSortHeader';
import ShipResult from './ShipResult';

const ShipResultContainer = ({ dataset, handleSort }) => {
  const attributeNames = {
    name: 'name',
    starship_class: 'class',
    length: 'length',
    crew: 'crew',
  };
  return (
    <main className='md:container md:mx-auto px-4 my-16'>
      <ColumnSortHeader
        attributeNames={attributeNames}
        handleSort={handleSort}
      />
      <ul>
        {dataset.map((planet, index) => {
          return <ShipResult key={index} attributes={planet} />;
        })}
      </ul>
    </main>
  );
};

export default ShipResultContainer;
