import { connect } from 'react-redux';
import { fetchLibrariesInit } from '../../../actions/fetchLibraries';
import LibrariesList from '../components/LibrariesList';
import { setPage } from '../../../actions/setPage';

const mapStateToProps = state => ({
  itemsList: state.fetchLibraries,
  activeFilter: state.setFilter,
  currentPage: state.setPage
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchLibrariesInit()),
  setPage: p => dispatch(setPage(p))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibrariesList);
