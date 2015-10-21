import { INCREASE_PRIORITY, DECREASE_PRIORITY } from './actions';

function getNewMotivators(previousMotivators, index, amount) {
  return [
    ...previousMotivators.slice(0, index),
    { ... previousMotivators[index], priority: previousMotivators[index].priority + amount},
    ...previousMotivators.slice(index + 1)
  ];
}

function motivators(state = {}, action) {
  switch (action.type) {
  case INCREASE_PRIORITY:
    if (state.motivators[action.motivatorIndex].priority + 1 > 5) return state;
    return {...state, motivators: getNewMotivators(state.motivators, action.motivatorIndex, 1)};
  case DECREASE_PRIORITY:
    if (state.motivators[action.motivatorIndex].priority - 1 < -5) return state;
    return {...state, motivators: getNewMotivators(state.motivators, action.motivatorIndex, -1)};
  default:
    return state;
  }
}

const motivatorsApp = motivators;

export default motivatorsApp;
