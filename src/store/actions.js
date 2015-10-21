export const INCREASE_PRIORITY = 'INCREASE_PRIORITY';
export const DECREASE_PRIORITY = 'DECREASE_PRIORITY';

/*
 * action creators
 */

export function increaseMotivatorPriority(motivatorIndex) {
  return { type: INCREASE_PRIORITY, motivatorIndex };
}

export function decreaseMotivatorPriority(motivatorIndex) {
  return { type: DECREASE_PRIORITY, motivatorIndex };
}
