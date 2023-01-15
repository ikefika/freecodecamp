/* Combine Multiple Reducers
Redux provides reducer composition as a solution for a complex state model. 
 You define multiple reducers to handle different pieces of your application's state, 
 then compose these reducers together into one root reducer.
 The root reducer is then passed into the Redux createStore() method.

 The combineReducers() method
 In order to let us combine multiple reducers together, Redux provides the combineReducers() method. 
 This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions. 
 The name you give to the keys will be used by Redux as the name for the associated piece of state.

 CHALLENGE:
 There are counterReducer() and authReducer() functions provided in the code editor, along with a Redux store. 
 Finish writing the rootReducer() function using the Redux.combineReducers() method. 
 Assign counterReducer to a key called count and authReducer to a key called auth.
*/

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

// Define the root reducer here
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);