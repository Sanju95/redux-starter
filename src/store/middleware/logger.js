const logger = param => store => next => action => {
 if(action.type === "log")
    console.log("Logging", param)
  else
    next(action);
}

export default logger;