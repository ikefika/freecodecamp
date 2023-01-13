const JSX = (
    <div>
        {/* Adding Comments in JSX */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );

// Render HTML Elements to the DOM
const JSX1 = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  ReactDOM.render(JSX1, document.getElementById("challenge-node"));

  // Define / Add a Html class in JSX, using className instead for class
  const JSX2 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

  // Complete this function so it returns a single div element which contains some string of text.
  const MyComponent = function() {
    // Change code below this line
    return (
      <div>Some string of text</div>
    );
  
  
    // Change code above this line
  };