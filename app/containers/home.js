import { connect } from 'react-redux';
import { actions } from 'actions/index';
import Home from 'components/home/';
import { bindActionCreators } from 'redux';
import { currentUserIdSelector } from 'selectors/current-user-selector';

function mapStateToProps(state) {
  return {
    currentUserId: currentUserIdSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createQuestion: actions.question.create,
      setTyping: actions.question.type,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
