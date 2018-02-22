import { connect } from 'react-redux';
import Home from 'components/home/';
import { bindActionCreators } from 'redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
