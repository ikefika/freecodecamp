/* There are two functional components defined in the code editor, called TypesOfFruit and Fruits.
Take the TypesOfFruit component and compose it, or nest it, within the Fruits component.
Then take the Fruits component and nest it within the TypesOfFood component.
The result should be a child component, nested within a parent component, which is nested within a parent component of its own!
*/

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
        <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
  };





  /* Compose React Components
    Nest two components inside of Fruits — first NonCitrus, and then Citrus.
    Both of these components are provided for you behind the scenes.
    Next, nest the Fruits class component into the TypesOfFood component, below the h1 heading element and above Vegetables.
    The result should be a series of nested components, which uses two different component types.
  */
  class Fruits1 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
          <NonCitrus />
          <Citrus />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits1 />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };