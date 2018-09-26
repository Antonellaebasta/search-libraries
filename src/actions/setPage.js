import { CURRENT_PAGE, SET_PAGE } from '../components/constants';

export const setPage = page => ({
  type: SET_PAGE,
  page
});
