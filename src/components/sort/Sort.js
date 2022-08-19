import React, { Component } from 'react';
import PropTypes from "prop-types";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.order = false;
    this.winLose = false;
  }

  static propTypes = {
    sortGames: PropTypes.func.isRequired
  }

  handleSortSwitch = () => {
    this.order = !this.order;
    const sortedGames = [...this.props.games].sort((a, b) => {
      if(this.order === false) {
        return a.etm < b.etm ? 1 : -1;
      } else {
        return a.etm > b.etm ? 1 : -1;
      }
    });
    this.props.sortGames(sortedGames);
  }

  removeLosses() {
    this.winLose = !this.winLose;
    const losses = document.querySelectorAll('.indyloss');
    const winBtn = document.getElementById('winBtn');
    for (const loss of losses) {
      if(this.winLose === true) {
        loss.style.display = 'none';
        winBtn.innerText = 'Be real';
      } else {
        loss.style.display = 'block';
        winBtn.innerText = 'Make it a winning season!';
      }
    }
  }

  render() {
    return (
      <div className="sortButtons">
        <button onClick={this.handleSortSwitch}>Sort switch</button>
        <button onClick={this.removeLosses.bind(this)} id="winBtn">Make it a winning season!</button>
      </div>
    )
  }
}

export default Sort
