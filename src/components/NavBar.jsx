import React from 'react';
import SafeSearchModal from './SafeSearchToggle';

const NavBar = () => {
  return (
    <div>
      <nav className='p-4 flex md:justify-end'>
        <ul className='md:flex gap-6 uppercase text-neutral-400 text-sm md:text-base'>
          <li>Search Records</li>
          <li>Explore Data</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
