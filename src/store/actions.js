export const INCREASE_PRIORITY = 'INCREASE_PRIORITY';
export const DECREASE_PRIORITY = 'DECREASE_PRIORITY';
export const MOTIVATOR_DRAG = 'MOTIVATOR_DRAG';

/*
 * action creators
 */

export function increaseMotivatorPriority(motivatorIndex) {
  return { type: INCREASE_PRIORITY, motivatorIndex };
}

export function decreaseMotivatorPriority(motivatorIndex) {
  return { type: DECREASE_PRIORITY, motivatorIndex };
}

export function motivatorDrag(motivatorIndex, positionIndex) {
  return { type: MOTIVATOR_DRAG, motivatorIndex, positionIndex };
}
