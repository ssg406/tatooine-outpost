import { useState } from "react";
import { FaSort } from "react-icons/fa";

const ColumnSortItem = ({ attribute, sortName, handleClick }) => {
  const [isAscending, setIsAscending] = useState(true);

  // When clicked, isAscending is toggled and passed with the sort category up the component tree
  const handleSortChange = (e) => {
    setIsAscending(() => !isAscending);
    handleClick(sortName, isAscending);
  };
  return (
    <div
      id={attribute}
      onClick={handleSortChange}
      className='flex text-neutral-600 gap-2 font-bold active:text-neutral-100 transition-colors ease-in-out'
    >
      <span className='uppercase'>{attribute}</span>
      <span className='mt-[0.2rem]'>
        <FaSort />
      </span>
    </div>
  );
};

export default ColumnSortItem;
