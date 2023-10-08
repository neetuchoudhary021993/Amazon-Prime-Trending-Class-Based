import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      index: 0,
    };
  }

  handleRestart = () => {
    this.setState({ index: 0 });
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      index: prevState.index > 0 ? prevState.index - 1 : 0,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      index:
        prevState.index < this.state.slides.length - 1
          ? prevState.index + 1
          : prevState.index,
    }));
  };

  render() {
    const { index, slides } = this.state;
    const currentSlide = slides[index];

    return (
      <div>
        <h1 id="title">{currentSlide.title}</h1>
        <p id="text">{currentSlide.text}</p>

        <button
          id="button-restart"
          onClick={this.handleRestart}
          disabled={index === 0}
        >
          Restart
        </button>
        <button
          id="button-prev"
          onClick={this.handlePrev}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          id="button-next"
          onClick={this.handleNext}
          disabled={index === slides.length - 1}
        >
          Next
        </button>
      </div>
    );
  }
}

export default App;
