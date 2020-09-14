import React from "react";
import Form from "./components/Form";
import seasonsSetter from "./scripts/seasonSetter";
import Card from "./components/PokemonCard";
import "./App.css";
import About from "./components/About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      season: " ",
      isCardShowing: false,
      wasFormSubmitted: false,
      isAbout: false,
    };
  }

  handleInput = (e) => {
    const [year, month, day] = e.target.value
      .replace(/-/g, " ")
      .split(" ")
      .map((elem) => parseInt(elem, 10));
    const season = seasonsSetter(month);
    this.setState({
      date: { month: month, day: day, year: year },
      season: season,
    });
  };

  changeState = (e) => {
    this.setState({
      ...this.state,
      wasFormSubmitted: !this.state.wasFormSubmitted,
      isCardShowing: !this.state.isCardShowing,
    });
  };

  handleInfo = (e) => {
    this.setState({
      ...this.state,
      wasFormSubmitted: !this.state.wasFormSubmitted,
      isAbout: !this.state.isAbout,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.changeState();
  };

  handleBack = (e) => {
    this.changeState();
  };
  render() {
    return (
      <div className={"subpixel-antialiased max-w-screen-md mx-auto"}>
        {!this.state.wasFormSubmitted && (
          <Form
            onInput={this.handleInput}
            onSubmit={this.handleSubmit}
            onInfo={this.handleInfo}
          />
        )}
        {this.state.isCardShowing && (
          <Card season={this.state.season} onBack={this.handleBack} />
        )}
        {this.state.isAbout && <About onBack={this.handleInfo} />}
      </div>
    );
  }
}

export default App;
