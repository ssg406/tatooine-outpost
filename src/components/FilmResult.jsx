const FilmResult = ({ title, release_date, opening_crawl, episode_id }) => {
  return (
    <article className='flex my-8 items-center gap-8'>
      <span className='md:text-8xl text-5xl font-orbitron font-bold text-neutral-800 basis-1/3'>
        {episode_id}
      </span>
      <div>
        <h2 className='md:text-2xl text-lg uppercase text-amber-500 font-bold'>
          {title}
        </h2>
        <h3 className='text-neutral-700 font-bold md:text-xl text-lg'>
          {release_date}
        </h3>
        <p className='md:text-base text-sm'>{opening_crawl}</p>
      </div>
    </article>
  );
};

export default FilmResult;
