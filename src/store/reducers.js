import { INCREASE_PRIORITY, DECREASE_PRIORITY, ORDER_MODIFIED } from './actions';

function modifyPriority(previousMotivators, id, amount) {
  return previousMotivators.map(motivator => {
    const immutableMotivator = Object.assign({}, motivator);
    if (immutableMotivator.id === id && immutableMotivator.priority + amount <= 1 && immutableMotivator.priority + amount >= -1) {
      immutableMotivator.priority += amount;
    }
    return immutableMotivator;
  });
}

function moveMotivators(previousMotivators, modifiedOrder) {
  const result = [];
  for (let i = 0; i < 10; i++) {
    const found = previousMotivators.find(m => m.id === modifiedOrder[i]);
    result.push(found);
  }
  return result;
}

function motivators(state = {}, action) {
  switch (action.type) {
  case INCREASE_PRIORITY:
    return {...state, motivators: modifyPriority(state.motivators, action.motivatorId, 1)};
  case DECREASE_PRIORITY:
    return {...state, motivators: modifyPriority(state.motivators, action.motivatorId, -1)};
  case ORDER_MODIFIED:
    return {...state, motivators: moveMotivators(state.motivators, action.modifiedOrder) };
  default:
    return state;
  }
}

const motivatorsApp = motivators;

export default motivatorsApp;
