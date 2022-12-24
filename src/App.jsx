import './App.css';
import React, { useState, useEffect } from 'react';
import {
  Header,
  Footer,
  SearchBar,
  LoadingSpinner,
  Alert,
  SearchRadioButtons,
  SearchSection,
  SafeSearchToggle,
} from './components';
import useFetchResults from './hooks/useFetchHooks';

const App = () => {
  const [category, setCategory] = useState('people');
  const [searchText, setSearchText] = useState('');
  const [isSafeSearch, setIsSafeSearch] = useState(false);
  const [sortCondition, setSortCondition] = useState('');
  const [isAscending, setIsAscending] = useState(true);
  const { filteredResults, loading, error } = useFetchResults(
    category,
    searchText,
    sortCondition,
    isAscending,
    isSafeSearch
  );

  const handleRadioClick = (e) => setCategory(e.target.value);

  const handleSort = (condition, isAscending) => {
    setIsAscending(() => !isAscending);
    setSortCondition(condition);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSafeSearch = (e) => {
    setIsSafeSearch(e.target.checked);
  };

  return (
    <>
      <Header handleSafeSearch={handleSafeSearch} />
      <SearchBar handleChange={handleSearch} searchText={searchText} />
      <SearchRadioButtons handleClick={handleRadioClick} />
      <SafeSearchToggle
        handleToggle={handleSafeSearch}
        isChecked={isSafeSearch}
      />

      {loading && <LoadingSpinner />}

      {error && <Alert error={error} />}

      {!loading && (
        <SearchSection
          dataset={filteredResults}
          handleSort={handleSort}
          category={category}
        />
      )}

      <Footer />
    </>
  );
};

export default App;
