import { connect } from 'react-redux';
import { setFilter } from '../../../actions/setFilter';
import Filters from '../components/Filters';

const mapDispatchToProps = dispatch => ({
  filterBy: filter => dispatch(setFilter(filter))
});

export default connect(
  null,
  mapDispatchToProps
)(Filters);
