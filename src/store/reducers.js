import { combineReducers } from 'redux';
import {
  FETCH_LIBRARIES,
  FETCH_LIBRARIES_SUCCESS,
  FETCH_LIBRARIES_FAIL,
  SET_FILTER,
  LIBRARIES_FILTER,
  QUERY_SEARCH,
  SET_QUERY_SEARCH,
  CURRENT_PAGE,
  SET_PAGE
} from '../components/constants';

const initialState = {
  libraries: {},
  loading: false,
  page: CURRENT_PAGE,
  sorting: LIBRARIES_FILTER.FILTER_BY_NAME,
  querySearch: QUERY_SEARCH
};

const fetchLibraries = (state = initialState.libraries, action) => {
  switch (action.type) {
    case FETCH_LIBRARIES:
    case FETCH_LIBRARIES_FAIL:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIBRARIES_SUCCESS:
      return {
        ...state,
        libraries: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

const setFilter = (state = initialState.sorting, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const setQuerySearch = (state = initialState.querySearch, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_QUERY_SEARCH:
      return action.query;
    default:
      return state;
  }
};

const setPage = (state = initialState.page, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
};

const librariesReducers = combineReducers({
  fetchLibraries,
  setFilter,
  setQuerySearch,
  setPage
});

export default librariesReducers;
