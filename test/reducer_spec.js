import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../src/results/store/reducer';
import fixtureData from '../fixtures/results';

describe('reducer', () => {
  it('handles SET_ENTRIES', () => {
    const initialState = Map();
    const action = { type: 'SET_ENTRIES', entries: fixtureData.SampleResults };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: fixtureData.SampleResults
    }));
  });

  it('handles START_LOADING', () => {
    const initialState = Map();
    const action = { type: 'START_LOADING' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      loading: true
    }));
  });

  it('handles END_LOADING', () => {
    const initialState = Map();
    const action = { type: 'END_LOADING' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      loading: false
    }));
  });

  it('has initial state', () => {
    const action = { type: 'SET_ENTRIES', entries: fixtureData.SampleResults };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      loading: true,
      entries: fixtureData.SampleResults
    }));
  });

  it('can be used with reduce', () => {
    const actions = [
      { type: 'SET_ENTRIES', entries: fixtureData.SampleResults },
      { type: 'END_LOADING' },
    ];

    const finalState = actions.reduce(reducer, undefined);

    expect(finalState).to.equal(fromJS({
      loading: false,
      entries: fixtureData.SampleResults
    }));
  });
});
