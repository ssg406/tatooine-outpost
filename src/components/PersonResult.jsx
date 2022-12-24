import React from 'react';

const PersonResult = ({ attributes }) => {
  const { name, gender, homeworld, birth_year, hair_color, mass, height } =
    attributes;
  return (
    <article className='my-6'>
      <header>
        <h3 className='p-2 text-xl font-orbitron uppercase text-amber-600'>
          {name}
        </h3>
      </header>

      <div className='bg-neutral-800 p-4 rounded-tl-xl rounded-br-xl grid grid-cols-4 text-xl'>
        <h4 className='uppercase'>
          <span className='font-bold text-neutral-400'>Born</span> {birth_year}
        </h4>
        <p>
          <span className='font-bold uppercase'>Hair</span> {hair_color}
        </p>
        <p>
          <span className='font-bold uppercase'>Height</span> {height}
          <span className='uppercase text-sm'>cm</span>
        </p>
        <p>
          <span className='font-bold uppercase'>Mass</span> {mass}
          <span className='uppercase text-sm'>kg</span>
        </p>
      </div>
    </article>
  );
};

export default PersonResult;
