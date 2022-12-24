import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-neutral-800 p-4'>
      <div className='md:container md:mx-auto flex justify-center gap-10 text-center text-neutral-500'>
        <p>
          Created by{' '}
          <a
            className='underline font-bold'
            href='https://samueljones.codes'
            target='_blank'
            rel='noopener noreferrer'
          >
            Samuel Jones
          </a>
        </p>

        <a
          className='text-2xl'
          href='https://linkedin.com/in/samuel-s-jones'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          className='text-2xl'
          href='https://github.com/ssg406'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
