import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import { setEntries, setLoading } from '../src/results/store/core';
import fixtureData from '../fixtures/results';

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = Map();
      const nextState = setEntries(state, fromJS(fixtureData.SampleResults));
      expect(nextState).to.equal(Map({
        entries: fromJS(fixtureData.SampleResults)
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const nextState = setEntries(state, fixtureData.SampleResults);
      expect(nextState).to.equal(Map({
        entries: fromJS(fixtureData.SampleResults)
      }));
    });
  });

  describe('setLoading', () => {
    it('adds loading:true to the state', () => {
      const state = Map();
      const loadingState = true;
      const nextState = setLoading(state, loadingState);
      expect(nextState).to.equal(Map({
        loading: true
      }));
    });
    it('adds loading:false to the state', () => {
      const state = Map();
      const loadingState = false;
      const nextState = setLoading(state, loadingState);
      expect(nextState).to.equal(Map({
        loading: false
      }));
    });
  });
});
