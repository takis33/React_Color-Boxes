import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./BoxesPage.css";

class BoxesPage extends Component {
  static defaultProps = {
    numberOfBoxes: 18
  };

  render() {
    // console.log(this.props.numberOfBoxes);
    const boxes = Array.from({ length: this.props.numberOfBoxes }).map(() => {
      return <ColorBox />;
    });
    return <div className="BoxesPage">{boxes}</div>;
  }
}

export default BoxesPage;
