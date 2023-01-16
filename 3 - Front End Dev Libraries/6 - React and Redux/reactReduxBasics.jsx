/* 1. Start with a DisplayMessages component. 
Add a constructor to this component and initialize it with a state that has two properties: 
input, that's set to an empty string, and messages, that's set to an empty array.
*/

/* 2. Manage State Locally First
Here you'll finish creating the DisplayMessages component.

First, in the render() method, have the component render an input element, button element, and ul element. 
When the input element changes, it should trigger a handleChange() method. 
Also, the input element should render the value of input that's in the component's state. 
The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. 
The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, 
and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.
*/

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.submitMessage = this.submitMessage.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  
    submitMessage(event) {
      this.setState({
        messages: [...this.state.messages, this.state.input], // You can also use this.state.messages.concat(this.state.input)
        input: ""   // strings are inherently immutable, so this is fine
      });
    }
  
    render() {
      
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.submitMessage}>Submit</button>
          <ul>{this.state.messages.map( (item, index) => <li key={index}>{item}</li>)}</ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };







/* Lesson 3: Extract State Logic to Redux
Now that you finished the React component, you need to move the logic it's performing locally in its state into Redux. 
This is the first step to connect the simple React app to Redux. 
The only functionality your app has is to add new messages from the user to an unordered list. 
The example is simple in order to demonstrate how React and Redux work together.

First, define an action type ADD and set it to a const ADD. 
Next, define an action creator addMessage() which creates the action to add a message. 
You'll need to pass a message to this action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. 
The initial state should equal an empty array. 
This reducer should add a message to the array of messages held in state, or return the current state. 
Finally, create your Redux store and pass it the reducer.
  */

  // Define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";

// Define an action creator addMessage() which creates the action to add a message
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

// create a reducer called messageReducer() that handles the state for the messages.
const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return state.concat(action.message);
    default:
      return state;
  }
};

// create your Redux store and pass it the reducer.
const store = Redux.createStore(messageReducer);






