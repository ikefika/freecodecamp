/* Use State to Toggle an Element
    Sometimes you might need to know the previous state when updating the state. 
    However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update.

    Using a function with setState guarantees you are working with the most current values of state and props.

    This code should be written as:
 */
    this.setState((state, props) => ({
        counter: state.counter + props.increment
    }));

// OR if you only need the state, and not the props
this.setState(state => ({
    counter: state.counter + 1
}));

/* CHALLENGE: MyComponent has a visibility property which is initialized to false. 
The render method returns one view if the value of visibility is true, and a different view if it is false.

Currently, there is no way of updating the visibility property in the component's state.
The value should toggle back and forth between true and false.
There is a click handler on the button which triggers a class method called toggleVisibility().
Pass a function to setState to define this method so that the state of visibility toggles to the opposite value when the method is called.
If visibility is false, the method sets it to true, and vice versa.

*/

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Bind "this" to toggleVisibility method
      this.toggleVisibility = this.toggleVisibility.bind(this);
      
    }
    // declare toggleVisibility method and set new state to change to the opposite of it's previous state
    toggleVisibility() {
    //   Use a function to ensure predictablity
        this.setState( state => ({visibility: !state.visibility}))
    }
    // Change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }