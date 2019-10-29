import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const InitialState = {
  tasks: []
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return Object.assign({}, state, {
        tasks: [...state.tasks, action.value]
      });
    case "REMOVE_TASK":
      const newTasks = state.tasks.filter(
        (item, index) => index !== action.value
      );
      return Object.assign({}, state, {
        tasks: newTasks
      });
    default:
      return state;
  }
};

// ACTIONS
export const addTask = task => dispatch => {
  return dispatch({
    type: "ADD_TASK",
    value: task
  });
};

export const removeTask = index => dispatch => {
  return dispatch({
    type: "REMOVE_TASK",
    value: index
  });
};

export function initializeStore(initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
