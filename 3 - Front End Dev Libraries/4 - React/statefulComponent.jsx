/* Create a Stateful Component
One of the most important topics in React is state. 
State consists of any data your application needs to know about, that can change over time. 
You want your apps to respond to state changes and present an updated UI when necessary.

Challenge: There is a component in the code editor that is trying to render a firstName property from its state. 
However, there is no state defined. 
Initialize the component with state in the constructor and assign your name to a property of firstName.
*/

class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
      this.state = {
        firstName: "Ikenna"
      }
      // Only change code above this line
    }
    render() {
      return (
        <div>
            {/* Access the state value in render */}
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  };




// Second method for Accessing the state value
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
      
    // You can access the state value here a perform javascript operations in it before passing it to the return() function 
      const name = this.state.name;
  
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  