import { fromJS } from 'immutable';
import { expect } from 'chai';
import fixtureData from '../fixtures/results';
import makeStore from '../src/results/store/store';

describe('store', () => {
  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(fromJS(
      {
        loading: true,
        entries: [],
      }));

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: fixtureData.SampleResults,
    });
    expect(store.getState()).to.equal(fromJS({
      loading: true,
      entries: fixtureData.SampleResults,
    }));
  });
});
