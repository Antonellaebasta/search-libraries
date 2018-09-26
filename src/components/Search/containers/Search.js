import { connect } from 'react-redux';
import { setQuerySearch } from '../../../actions/setQuerySearch';
import Search from '../components/Search';

const mapStateToProps = state => ({
  currentSearch: state.setQuerySearch
});

const mapDispatchToProps = dispatch => ({
  setSearch: q => dispatch(setQuerySearch(q))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
