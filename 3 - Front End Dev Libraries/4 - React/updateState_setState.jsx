/* Set State with this.setState

Challenge: There is a button element in the code editor which has an onClick() handler.
This handler is triggered when the button receives a click event in the browser, and runs the handleClick method defined on MyComponent
Within the handleClick method, update the component state using this.setState().
Set the name property in state to equal the string React Rocks!.
*/

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
    // bind this in the constructor so this becomes bound to the class methods when the component is initialized.
    // Then, when you call a function like this.setState() within your class method, "this" refers to the class and will not be undefined.
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
      this.setState(
        {
          name: "React Rocks!"
        }
      );
      // Change code above this line
    }
    render() {
      return (
        <div>
            {/* add a click handler to the button element in the render method. 
            It should trigger the handleClick() method when the button receives a click event */}
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };