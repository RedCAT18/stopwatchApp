import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as timerActions } from '../../reducer';

import Timer from './presenter';

const mapStateToProps = state => {
  const { isPlaying, isFinish, elapsedTime } = state;

  return { isPlaying, isFinish, elapsedTime };
};

const mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(timerActions.startTimer, dispatch),
    pauseTimer: bindActionCreators(timerActions.pauseTimer, dispatch),
    stopTimer: bindActionCreators(timerActions.stopTimer, dispatch),
    countSecond: bindActionCreators(timerActions.countSecond, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
