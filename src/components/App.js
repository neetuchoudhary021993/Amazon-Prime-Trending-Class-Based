
import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      index: 0,
    };
  }

  render() {
    
    const { index, slides } = this.state;

    return (
      <>
      <button id="button-restart"></button>
      <button id="button-prev"></button>
      <button id="button-next"></button>
      </>
    );
  }
}

export default App;

