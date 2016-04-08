import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = Map({
  loading: true
});

export function setEntries(state, entries) {
  return state.set('entries', fromJS(entries));
}

export function setLoading(state, loadingState) {
  return state.set('loading', loadingState);
}
