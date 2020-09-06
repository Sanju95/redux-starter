import store from './store/configureStore';
import { bugAdded, bugResolved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded, userRemoved, getActiveUsers } from './store/users';

store.subscribe(() => {
  console.log("Store changed!");
})

// store.dispatch({
//   type: "error",
//   payload: {
//     message: "An error occourred!"
//   }
// })

// store.dispatch({
//   type: "log"
// })

store.dispatch({
  type: "apiRequest",
  payload: {    
    url: "/bugs2",
    onSuccess: "bugsReceived",
    onError: "APIRequestFailed"
  }
})

// store.dispatch(userAdded({name: "Name 1"}));
// store.dispatch(userAdded({name: "Name 2"}));
// store.dispatch(userAdded({name: "Name 3"}));
// store.dispatch(userRemoved({id: 2}));
// const activeUsers = getActiveUsers(store.getState());
// console.log(activeUsers);

// store.dispatch(projectAdded({ name: "Project 1"}));

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 3 }));
// const bugsByUser = getBugsByUser(2)(store.getState());
// const unresolvedBugs = getUnresolvedBugs(store.getState());
// console.log(unresolvedBugs);
// console.log(bugsByUser);

// const a = getUnresolvedBugs(store.getState());
// const b = getUnresolvedBugs(store.getState());
// console.log(a === b);