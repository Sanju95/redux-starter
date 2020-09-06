import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

let lastId = 0;

export const sliceUser = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
        active: true
      });  
    },
    userRemoved: (users, action) => {
      let index = users.findIndex(user => user.id === action.payload.id);
      users[index].active = false;
    }
  }
})

export default sliceUser.reducer;
export const {userAdded, userRemoved} = sliceUser.actions;

//= NORMAL SELECTOR
//--------------------------------------------------------------------

// export const getActiveUsers = state => {
//     return state.entities.users.filter(user => user.active);
// }

//= MEMOIZATION SELECTOR
//--------------------------------------------------------------------
export const getActiveUsers = createSelector(
  state => state.entities.users,
  users => users.filter(user => user.active)
);
