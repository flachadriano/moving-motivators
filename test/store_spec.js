import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import { fixtureData } from './fixtures';
import makeStore from '../src/results/store/store';

describe('store', () => {
  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map({
      loading: true,
    }));

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: fixtureData,
    });
    expect(store.getState()).to.equal(fromJS({
      loading: true,
      entries: fixtureData,
    }));
  });
});
