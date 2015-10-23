import { INCREASE_PRIORITY, DECREASE_PRIORITY, MOTIVATOR_DRAG } from './actions';

function getNewMotivators(previousMotivators, index, amount) {
  return [
    ...previousMotivators.slice(0, index),
    { ... previousMotivators[index], priority: previousMotivators[index].priority + amount},
    ...previousMotivators.slice(index + 1)
  ];
}

function moveMotivators(previousMotivators, oldIndex, newIndex) {
  const result = [ ...previousMotivators ];
  result.splice(newIndex, 0, result.splice(oldIndex, 1)[0]);
  console.log('result', result);

  return result;
}

function motivators(state = {}, action) {
  switch (action.type) {
  case INCREASE_PRIORITY:
    if (state.motivators[action.motivatorIndex].priority + 1 > 1) return state;
    return {...state, motivators: getNewMotivators(state.motivators, action.motivatorIndex, 1)};
  case DECREASE_PRIORITY:
    if (state.motivators[action.motivatorIndex].priority - 1 < -1) return state;
    return {...state, motivators: getNewMotivators(state.motivators, action.motivatorIndex, -1)};
  case MOTIVATOR_DRAG:
    console.log('motivator drag', state, action);
    moveMotivators(state.motivators, action.motivatorIndex, action.positionIndex);
    return {...state };
  default:
    return state;
  }
}

const motivatorsApp = motivators;

export default motivatorsApp;
