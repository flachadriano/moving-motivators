import { setEntries, setLoading, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'START_LOADING':
      return setLoading(state, true);
    case 'END_LOADING':
      return setLoading(state, false);
    default:
      return state;
  }
}
