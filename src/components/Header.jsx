import { useState } from 'react';
import NavBar from './NavBar';
import SafeSearchModal from './SafeSearchToggle';

const Header = () => {
  return (
    <header className='border-b border-neutral-700'>
      <div className='md:container md:mx-auto md:my-6 md:flex justify-between items-end p-4'>
        <h1 className='font-orbitron md:text-6xl text-2xl font-extrabold tracking-tight'>
          <span className='text-neutral-500'>tatooine</span>outpost
        </h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
