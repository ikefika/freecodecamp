/* There are Calendar and CurrentDate components in the code editor. 
When rendering CurrentDate from the Calendar component, 
pass in a property of date assigned to the current date from JavaScript's Date object. 
Then access this prop in the CurrentDate component, showing its value within the p tags. 
Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.

This shows how to pass information from a parent element to a child element
*/


const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date}</p> {/* receives the value of the argument <date> passed from the Calendar component*/}
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()}/>      {/*Takes the value of Date() and passes it as an argument </props> to the CurrentDate function*/}
          { /* Change code above this line */ }
        </div>
      );
    }
  };


/* Pass an Array as Props from Parent Component to Child Stateless Function
Same as above, however Array methods such as join() can be used when accessing the property.

Challenge: There are List and ToDo components in the code editor.
When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, 
for example ["walk dog", "workout"]. 
Then access this tasks array in the List component, showing its value within the p element.
Use join(", ") to display the props.tasksarray in the p element as a comma separated list. 
Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.
*/

const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["wake-up", "coding", "workout"]} />
        { /* Change code above this line */ }
      </div>
    );
  }
};

