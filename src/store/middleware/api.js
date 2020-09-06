import axios from "axios";

const api = ({ dispatch }) => next => async action => {
  if(action.type !== "apiRequest") return next(action);

  next(action);

  const { url, onSuccess, onError } = action.payload;

  try{
    const response = await axios.request({
    baseURL: "http://localhost:9001/api",
    url
  });
  dispatch({ type: onSuccess, payload: response.data });

  } catch(error){
    dispatch({ type: onError, payload: error })
  }
}

export default api;