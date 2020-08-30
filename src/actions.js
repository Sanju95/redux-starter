import * as actionType from './actionTypes';

export const bugAdded = description => ({
  type: actionType.BUG_ADDED,
  payload: {
    description
  }
});

export const bugResolved = id => ({
  type: actionType.BUG_RESOLVED,
  payload: {
    id
  }
});

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description
//     }
//   };
// };

export function bugRemoved(id) {
  return{
    type: actions.BUG_REMOVED,
    payload: {
      id
    }
  }
}
