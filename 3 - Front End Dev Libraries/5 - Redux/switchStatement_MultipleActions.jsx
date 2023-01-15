/* Use a Switch Statement to Handle Multiple Actions
You can tell the Redux store how to handle multiple action types. 
Say you are managing user authentication in your Redux store. 
You want to have a state representation for when users are logged in and when they are logged out. 
You represent this with a single state object with the property authenticated. 
You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.

CHALLENGE:
The code editor has a store, actions, and action creators set up for you. 
Fill in the reducer function to handle multiple authentication actions. 
Use a JavaScript switch statement in the reducer to respond to different action events. 
This is a standard pattern in writing Redux reducers. 
The switch statement should switch over action.type and return the appropriate authentication state.


*/
const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
      case 'LOGIN':
        return state = {authenticated: true}; // You can also return {authenticated: true}, but this is not good for immutability
        break;
      case 'LOGOUT':
        return state = {authenticated: false} // You can also return {authenticated: false}, but this is not good for immutability
        break;
      default:
        return state = defaultState; // You can also return defaultState, but this is not good for immutability
    }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };