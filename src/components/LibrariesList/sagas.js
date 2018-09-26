import { takeLatest, call, put, select, take } from 'redux-saga/effects';
import {
  FETCH_LIBRARIES,
  FETCH_LIBRARIES_SUCCESS,
  FETCH_LIBRARIES_FAIL,
  SET_QUERY_SEARCH,
  SET_PAGE
} from '../constants';
import { fetchData } from '../../store/fetchData';

function* fetchLibraries() {
  try {
    const state = yield select();
    const data = yield call(fetchData, state.setQuerySearch, state.setPage);
    yield put({ type: FETCH_LIBRARIES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_LIBRARIES_FAIL, error });
  }
}

export default function* fetchLibrariesSaga() {
  yield takeLatest(FETCH_LIBRARIES, fetchLibraries);
  yield takeLatest(SET_PAGE, fetchLibraries);
  yield takeLatest(SET_QUERY_SEARCH, fetchLibraries);
}
