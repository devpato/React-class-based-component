import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season-display';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //Only purpose is to initialize the state
  //   this.state = { lat: null, errorMessage: null };
  // }

  state = { lat: null, errorMessage: null };

  componentDidMount() {
    console.log('my component was rendered');
    this.getLocation();
  }

  componentDidUpdate() {
    console.log('my component was just updated');
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading...</div>;
  }

  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
