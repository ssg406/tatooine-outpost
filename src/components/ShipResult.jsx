import React from 'react';

const ShipResult = ({ attributes }) => {
  const { name, starship_class, length, crew } = attributes;

  return (
    <article className='my-6'>
      <header>
        <h3 className='p-2 text-xl font-orbitron uppercase text-amber-600'>
          {name}
        </h3>
      </header>
      <div className='bg-neutral-800 p-4 rounded-tl-xl rounded-br-xl grid grid-cols-3 gap-y-6 text-xl'>
        <h3 className='uppercase font-bold text-neutral-400'>
          Class
          {' ' + starship_class}
        </h3>
        <h3 className='uppercase'>
          <span className='font-bold text-neutral-400'>Length</span>
          {' ' + length}
          <span className='uppercase text-sm'>m</span>
        </h3>
        <h3 className='uppercase font-bold text-neutral-400'>
          Crew{' ' + crew}
        </h3>
      </div>
    </article>
  );
};

export default ShipResult;
