/* Access Props Using this.props
    Anytime you refer to a class component within itself, you use the this keyword.
    For example, if an ES6 class component has a prop called data, you write {this.props.data} in JSX.

Challenge: Render an instance of the Welcome component in the parent component App. 
Here, give Welcome a prop of name and assign it a value of a string.
Within the child, Welcome, access the name prop within the strong tags.
*/

class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name={"Ikenna"}/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };