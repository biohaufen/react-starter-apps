import React, { Component } from "react";

class WidgetItem extends Component {
  state = { count: 0 };

  increaseCount = () => {
    let countToIncrease = this.state.count;
    this.setState({ count: countToIncrease + 1 });
  };

  render() {
    return (
      <li className="language">
        <div className="voteCount">{this.state.count}</div>
        <div>{this.props.languageName}</div>
        <button onClick={this.increaseCount}>vote</button>
      </li>
    );
  }
}

export default WidgetItem;
