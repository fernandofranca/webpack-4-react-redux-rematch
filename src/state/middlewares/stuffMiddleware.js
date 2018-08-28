export default store => next => action => {
  let result = next(action);
  if (action.type === "stuff/increment") {
    store.dispatch({ type: "another/increment" });
  }
  return result;
};