export const INCREASE_PRIORITY = 'INCREASE_PRIORITY';
export const DECREASE_PRIORITY = 'DECREASE_PRIORITY';
export const ORDER_MODIFIED = 'ORDER_MODIFIED';

/*
 * action creators
 */

export function increaseMotivatorPriority(motivatorId) {
  return { type: INCREASE_PRIORITY, motivatorId };
}

export function decreaseMotivatorPriority(motivatorId) {
  return { type: DECREASE_PRIORITY, motivatorId };
}

export function motivatorOrderModified(modifiedOrder) {
  return { type: ORDER_MODIFIED, modifiedOrder };
}
