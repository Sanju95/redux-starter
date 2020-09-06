import { combineReducers } from "redux";
import userReducer from "./users";
import projectReducer from "./projects";
import bugsReducer from "./bugs";

export default combineReducers({
  users: userReducer,
  projects: projectReducer,
  bugs: bugsReducer

});