const SafeSearchToggle = ({ handleToggle, isChecked }) => {
  return (
    <div className='p-4 flex justify-center'>
      <label className='inline-flex relative items-center cursor-pointer'>
        <input
          type='checkbox'
          onChange={handleToggle}
          className='sr-only peer'
          checked={isChecked}
        />
        <div className="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500 rounded-full peer bg-neutral-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600"></div>
        <span className='ml-3 text-sm font-bold text-neutral-400 uppercase'>
          Filter Dark Side
        </span>
      </label>
    </div>
  );
};

export default SafeSearchToggle;
