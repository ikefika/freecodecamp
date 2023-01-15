/* Handle an Action in the Store
After an action is created and dispatched, the Redux store needs to know how to respond to that action.
This is the job of a reducer function. 
Reducers in Redux are responsible for the state modifications that take place in response to actions.
A reducer takes state and action as arguments, and it always returns a new state.
It is important to see that this is the only role of the reducer.

The code editor has the previous example as well as the start of a reducer function for you. 
Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' 
it returns a state object with login set to true. Otherwise, it returns the current state. 
Note that the current state and the dispatched action are passed to the reducer, 
so you can access the action's type directly with action.type.

*/

const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
    return action.type =='LOGIN' ? state = {login: true} : state = defaultState;
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };