import {
  FETCH_LIBRARIES,
  FETCH_LIBRARIES_SUCCESS,
  FETCH_LIBRARIES_FAIL
} from '../components/constants';

export const fetchLibrariesInit = () => ({
  type: FETCH_LIBRARIES
});

export const fetchLibrariesSuccess = response => ({
  type: FETCH_LIBRARIES_SUCCESS,
  ...response
});

export const fetchLibrariesFail = response => ({
  type: FETCH_LIBRARIES_FAIL,
  ...response
});
