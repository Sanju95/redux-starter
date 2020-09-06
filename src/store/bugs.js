import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      })
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex(bug => bug.id === bugId);
      bugs[index].userId = userId;
    }
  }
});

export const {bugAdded, bugResolved, bugAssignedToUser} = slice.actions;
export default slice.reducer;

// export const getUnresolvedBugs = state => 
//   state.entities.bugs.filter(bug => !bug.resolved);

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
)


/* 
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

//= REDUCER
//-------------------------------------

let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    })
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id);
    bugs[index].resolved = true;
  }
});

 */


/*
//= ACTION TYPES
//-------------------------------------
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

//= ACTIONS CREATORS
//-------------------------------------

export const bugAdded = description => ({
  type: BUG_ADDED,
  payload: {
    description
  }
});

export const bugResolved = id => ({
  type: BUG_RESOLVED,
  payload: {
    id
  }
});

//= REDUCER
//-------------------------------------

let lastId = 0;

export default function reducer (state = [], action) {
  
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ];

    case BUG_REMOVED:
      return[
        state.filter(bug => bug.id !== action.payload.id)
      ];

    case BUG_RESOLVED:
      return[
        state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })
      ]

    default:
      return state;
  }
}
*/