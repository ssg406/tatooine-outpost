import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchRadioButtons from "./components/SearchRadioButtons";
import SafeSearchToggle from "./components/SafeSearchToggle";
import SearchSection from "./components/SearchSection";
import useFetchResults from "./hooks/useFetchHooks";
import LoadingSpinner from "./components/LoadingSpinner";
import Alert from "./components/Alert";

const SearchPage = () => {
  // Set up search state
  const [category, setCategory] = useState("people");
  const [searchText, setSearchText] = useState("");
  const [isSafeSearch, setIsSafeSearch] = useState(false);
  const [sortCondition, setSortCondition] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  // Pass search parameters to custom hook and retrieve filtered results
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
    <main>
      <SearchBar
        handleChange={handleSearch}
        searchText={searchText}
        category={category}
      />
      <SearchRadioButtons handleClick={handleRadioClick} category={category} />
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
    </main>
  );
};

export default SearchPage;
