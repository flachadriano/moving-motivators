import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../store/reducer';

import { Motivators } from './common/motivators';
import MotivatorResultsTable from './motivatorresulttable';

import request from 'superagent';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

function loadResults() {
  return function (dispatch) {
    dispatch({ type: 'START_LOADING' });
    return new Promise(() => {
      request.get(`/${window.fetchUrl}`).end((err, res) => {
        dispatch({ type: 'SET_ENTRIES', entries: res.body });
        dispatch({ type: 'END_LOADING' });
      });
    });
  };
}

store.dispatch(
  loadResults()
);

ReactDOM.render(
  <Provider store={store}>
    <MotivatorResultsTable motivators={Motivators} />
  </Provider>,
  document.getElementById('reactHere')
);
