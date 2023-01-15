/* Create a Redux Store
Redux is a state management framework that can be used with a number of different web technologies, including React.
In Redux, there is a single state object that's responsible for the entire state of your application.

The Redux store is an object which holds and manages application state. 
There is a method called createStore() on the Redux object, which you use to create the Redux store. 
his method takes a reducer function as a required argument. 
The reducer function is covered in a later challenge, and is already defined for you in the code editor. 
It simply takes state as an argument and returns state.

Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.

Note: The code in the editor uses ES6 default argument syntax to initialize this state to hold a value of 5. 
If you're not familiar with default arguments, you can refer to the ES6 section in the Curriculum which covers this topic.
*/
const reducer = (state = 5) => {
    return state;
  }
  
// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);


/* Get State from the Redux Store
The Redux store object provides several methods that allow you to interact with it. 
For example, you can retrieve the current state held in the Redux store object with the getState() method.

Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.
*/
const store1 = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store1.getState();





/* Define a Redux Action
Since Redux is a state management framework, updating state is one of its core tasks.
In Redux, all state updates are triggered by dispatching actions.
An action is simply a JavaScript object that contains information about an action event that has occurred.
The Redux store receives these action objects, then updates its state accordingly.

Sometimes a Redux action also carries some data. e.g. username
While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.

Writing a Redux action is as simple as declaring an object with a type property. 
Declare an object action and give it a property type set to the string 'LOGIN'.
*/

// Define an action here:
const action = {
  type: 'LOGIN'
};




/* Define an Action Creator
After creating an action, the next step is sending the action to the Redux store so it can update its state.
In Redux, you define action creators to accomplish this.

An action creator is simply a JavaScript function that returns an action.
In other words, action creators create objects that represent action events.

Define a function named actionCreator() that returns the action object when called.
*/

// Define an action creator here:

const actionCreator = function() {
  return action;
}





