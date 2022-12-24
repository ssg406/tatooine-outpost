import { useEffect, useReducer } from 'react';
import axios from 'axios';

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

const initialState = {
  results: [],
  filteredResults: [],
  loading: true,
  error: null,
};

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
    case ACTIONS.SEARCH_RESULTS:
      const { searchText } = action.payload;
      const filteredResults = state.results.filter(({ name }) =>
        name.toLowerCase().includes(searchText)
      );
      return {
        ...state,
        filteredResults,
      };
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
    case ACTIONS.SAFE_SEARCH:
      const { isSafeSearch } = action.payload;
      if (isSafeSearch) {
        const darkString = darkWords.join(' ');
        const filteredResults = state.results.filter(({ name }) => {
          return darkString.includes(name);
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

  const fetchData = async () => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    let totalResults = [];

    try {
      let url = `https://swapi.dev/api/${category}/?page=1`;

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

  useEffect(() => {
    fetchData();
  }, [category]);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SEARCH_RESULTS,
      payload: { searchText: searchText.toLowerCase() },
    });
  }, [searchText]);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SORT_RESULTS,
      payload: { sortCondition, isAscending },
    });
  }, [sortCondition, isAscending]);

  useEffect(() => {
    dispatch({ type: ACTIONS.SAFE_SEARCH, payload: { isSafeSearch } });
  }, [isSafeSearch]);

  return state;
}
