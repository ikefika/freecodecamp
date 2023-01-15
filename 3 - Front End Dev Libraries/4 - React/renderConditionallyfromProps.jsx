/* Render Conditionally from Props

CHALLENGE: 
In this challenge, you'll set up a child component to make rendering decisions based on props. 
You'll also use the ternary operator, 
but you can see how several of the other concepts that were covered in the last few challenges might be just as useful in this context.

The code editor has two components that are partially defined for you: a parent called GameOfChance, and a child called Results. 
They are used to create a simple game where the user presses a button to see if they win or lose.


*/


class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      {/* Change code below this line */}
      const winText = <h1>You Win!</h1>;    // Declare html element to be rendered as winText i.e. if fiftyFifty == true
      const loseText = <h1>You Lose!</h1>;  // Declare html element to be rendered as loseText i.e. if fiftyFifty == false
      
      return (
        <div>
          {/* Use ternary operator to implement conditional rendering */}
          {this.props.fiftyFifty ? winText : loseText}
        </div>
      );
      {/* Change code above this line */}
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => {
        // Complete the return statement:
        return {
          counter: prevState.counter + 1 // To increment the state counter so that the player can see the counter increase
        }
      });
    }
    render() {
      const expression = (Math.random() >= .5); // to return true/false 50% of the time
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          {/* Change code below this line */}
          <Results fiftyFifty={expression}/>
          {/* Change code above this line */}
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }