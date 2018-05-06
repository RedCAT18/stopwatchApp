import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import Timer from './components/Timer';

let store = createStore(reducer);

class App extends Component {
  render() {
    const appTitle = 'TIMER';
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

export default App;
