import React from 'react';

const PlanetResult = ({ attributes }) => {
  const { name, rotation_period, climate, population } = attributes;
  const numFormatter = Intl.NumberFormat('en-US');
  const formattedPop =
    numFormatter.format(population) === 'NaN'
      ? 'unknown'
      : numFormatter.format(population);

  return (
    <article className='my-6'>
      <header>
        <h3 className='p-2 text-xl font-orbitron uppercase text-amber-600'>
          {name}
        </h3>
      </header>

      <div className='bg-neutral-800 p-4 rounded-tl-xl rounded-br-xl grid grid-cols-3 gap-y-6 text-xl'>
        <h3 className='uppercase'>
          <span className='font-bold text-neutral-400'>Day</span>{' '}
          {rotation_period}
          <span className='uppercase text-sm'>hr</span>
        </h3>
        <p>
          <span className='font-bold uppercase text-neutral-400'>Climate</span>{' '}
          <span className='capitalize'>{climate}</span>
        </p>
        <p>
          <span className='font-bold uppercase text-neutral-400'>Pop</span>{' '}
          <span className='capitalize'>{formattedPop}</span>
        </p>
      </div>
    </article>
  );
};

export default PlanetResult;
