import axios from "axios";
import { apiCallBegin, apiCallFailed, apiCallSuccess } from "../api";

const api = ({ dispatch }) => next => async action => {
  if(action.type !== apiCallBegin.type) return next(action);

  const { url, onSuccess, onError, onStart } = action.payload;
  
  if(onStart) dispatch({ type: onStart });
  
  next(action);

  try{
    const response = await axios.request({
    baseURL: "http://localhost:9001/api",
    url
  });
  //general
  dispatch(apiCallSuccess(response.data));
  //specific
  if(onSuccess) dispatch({ type: onSuccess, payload: response.data });

  } catch(error){
    //General
    dispatch(apiCallFailed(error.message));
    //specific
    if(onError) dispatch({ type: onError, payload: error.message });
  }
}

export default api;