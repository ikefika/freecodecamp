/* MyComponent is defined in the code editor using class syntax. 
Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!. */
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
      return (
        <div>
          <h1>Hello React!</h1>
        </div>
      );
      
      // Change code above this line
    }
  };

  // React Components with Heirarchy
  const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
            <ChildComponent />
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };