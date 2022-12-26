import { useEffect, useReducer } from 'react';
import axios from 'axios';

// Reducer Actions
const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  NEXT_PAGE: 'next-page',
  HIDE_ALERT: 'hide-alert',
  SORT_RESULTS: 'sort-results',
  SEARCH_RESULTS: 'search-results',
  SAFE_SEARCH: 'safe-search',
};

// Initial state passed to reducer
const initialState = {
  results: [],
  filteredResults: [],
  loading: true,
  error: null,
};

// Set of words used to filter out 'dark side' related content
const darkWords = ['anakin', 'darth', 'palpatine', 'grievous', 'destroyer'];

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        ...state,
        loading: true,
        results: [],
      };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        filteredResults: action.payload.results,
        error: null,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        results: [],
      };
    case ACTIONS.HIDE_ALERT:
      return {
        ...state,
        error: null,
      };
    // Returns array of objects whose name property partially matches search text
    case ACTIONS.SEARCH_RESULTS:
      const { searchText } = action.payload;
      const filteredResults = state.results.filter(({ name }) =>
        name.toLowerCase().includes(searchText)
      );
      return {
        ...state,
        filteredResults,
      };
    // Uses dynamic object key to sort the filtered list in either ascending
    // or descending order.
    case ACTIONS.SORT_RESULTS:
      const { sortCondition, isAscending } = action.payload;
      if (isAscending) {
        state.filteredResults.sort((a, b) =>
          a[sortCondition] > b[sortCondition] ? 1 : -1
        );
      } else {
        state.filteredResults.sort((a, b) =>
          a[sortCondition] > b[sortCondition] ? -1 : 1
        );
      }
      return {
        ...state,
      };
    // Removes any object in filtered list whose name property matches a list in the dark words array
    case ACTIONS.SAFE_SEARCH:
      const { isSafeSearch } = action.payload;
      if (isSafeSearch) {
        const filteredResults = state.results.filter(({ name }) => {
          return !darkWords.find(darkWord => name.toLowerCase().includes(darkWord));
        });
        return {
          ...state,
          filteredResults,
        };
      } else {
        return {
          ...state,
          filteredResults: state.results,
        };
      }
    default:
      return state;
  }
};

export default function useFetchResults(
  category,
  searchText,
  sortCondition,
  isAscending,
  isSafeSearch
) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Retrieves data from SWAPI
  const fetchData = async () => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    let totalResults = [];

    try {
      let url = `https://swapi.dev/api/${category}/?page=1`;

      // Continuously retrieves the next page until the API does not return a 'next' url
      while (url) {
        const { data } = await axios.get(url);
        totalResults = totalResults.concat(data.results);
        url = data.next || null;
      }
      dispatch({
        type: ACTIONS.GET_DATA,
        payload: { results: totalResults },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.ERROR, payload: { error } });
    }
  };

  // New data is fetched when the category is changed
  useEffect(() => {
    fetchData();
  }, [category]);

  // Dispatches search action when searchText is changed
  useEffect(() => {
    dispatch({
      type: ACTIONS.SEARCH_RESULTS,
      payload: { searchText: searchText.toLowerCase() },
    });
  }, [searchText]);

  // Dispatches the sort action when the sort condition or isAscending flag is changed
  useEffect(() => {
    dispatch({
      type: ACTIONS.SORT_RESULTS,
      payload: { sortCondition, isAscending },
    });
  }, [sortCondition, isAscending]);

  // Dispatches safe search action when flag is changed
  useEffect(() => {
    dispatch({ type: ACTIONS.SAFE_SEARCH, payload: { isSafeSearch } });
  }, [isSafeSearch]);

  return state;
}
