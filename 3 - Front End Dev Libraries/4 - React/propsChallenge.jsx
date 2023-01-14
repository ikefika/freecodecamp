/* The code editor has a CampSite component that renders a Camper component as a child. 
(1) Define the Camper component and (2) assign it default props of { name: 'CamperBot' }. 
(3) Inside the Camper component, render any code that you want, 
but make sure to have one p element that includes only the name value that is passed in as a prop. 
(4) Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
*/

class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };
  // Change code below this line
  
  /* (1) Define the Camper component */
  class Camper extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            {/* (3) make sure to have one p element that includes only the name value that is passed in as a prop */}
          <p>{this.props.name}</p>
        </div>
      )
      
    }
  }
  
  /*(2) assign it default props of { name: 'CamperBot' }.*/
  Camper.defaultProps = {
    name: 'CamperBot'
  };
  
//   (4) Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  };