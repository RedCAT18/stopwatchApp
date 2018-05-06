// import { combineReducers } from 'redux';

//actions
// 1. start/pause : stop counting, keep time
// 2. stop status : stop counting, reset time
// 3. playing status
// 4. count second

const START_TIMER = 'start_timer';
const PAUSE_TIMER = 'pause_timer';
const STOP_TIMER = 'stop_timer';
const COUNT_SECOND = 'count_second';

//action creators

function startTimer() {
  return {
    type: START_TIMER
  };
}

function pauseTimer() {
  return {
    type: PAUSE_TIMER
  };
}

function stopTimer() {
  return {
    type: STOP_TIMER
  };
}

function countSecond() {
  return {
    type: COUNT_SECOND
  };
}

const INITIAL_STATE = {
  isPlaying: false,
  isFinish: true,
  elapsedTime: 0
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case PAUSE_TIMER:
      return applyPauseTimer(state);
    case STOP_TIMER:
      return applyStopTimer(state);
    default:
      return state;
  }
}

//helper functions

function applyStartTimer(state) {
  //counting time

  return { ...state, isPlaying: true, isFinish: false };
}

function applyPauseTimer(state) {
  return { ...state, isPlaying: false, isFinish: false };
}

function applyStopTimer(state) {
  return INITIAL_STATE;
}

const actionCreators = {
  startTimer,
  pauseTimer,
  stopTimer
};

export { actionCreators };

export default reducer;
