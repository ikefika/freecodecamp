//  componentWillMount(): Called just before a component mounts the DOM
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
      console.log("componentWillMount() method called");
      // Change code above this line
    }
    render() {
      return <div />
    }
  };


//   componentDidMount() : Called after a component has been mounted on the DOM
/* Example Challenge: There is a mock API call in componentDidMount(). 
It sets state after 2.5 seconds to simulate calling a server to retrieve data. 
This example requests the current total active users for a site. 
In the render method, render the value of activeUsers in the h1 after the text Active Users:. 
Watch what happens in the preview, and feel free to change the timeout to see the different effects.
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => { // setTimeout() method calls a function after a number of milliseconds. It is under the JS Window object
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }

