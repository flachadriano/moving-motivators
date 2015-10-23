import { INCREASE_PRIORITY, DECREASE_PRIORITY, ORDER_MODIFIED } from './actions';

function modifyPriority(previousMotivators, id, amount) {
  const newMotivators = [...previousMotivators];
  const selectedMotivator = newMotivators.find(m => m.id === id);
  if (selectedMotivator.priority + amount <= 1 && selectedMotivator.priority + amount >= -1) selectedMotivator.priority += amount;
  return newMotivators;
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
