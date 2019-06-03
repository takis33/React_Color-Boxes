import React, { Component } from "react";
import "./ColorBox.css";
import { choice } from "./helpers";

class ColorBox extends Component {
  static defaultProps = {
    allColors: [
      "red",
      "blue",
      "green",
      "pink",
      "brown",
      "black",
      "purple",
      "yellow",
      "orange"
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.allColors)
    };
  }

  pickColour = () => {
    let newColor = choice(this.props.allColors);
    while (newColor === this.state.color) {
      newColor = choice(this.props.allColors);
    }

    this.setState({
      color: newColor
    });
  };

  handleClick = () => {
    this.pickColour();
  };

  render() {
    console.log(this.state.color);
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default ColorBox;
