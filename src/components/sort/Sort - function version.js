import React from 'react';
import PropTypes from "prop-types";

const Sort = ({games, sortGames}) => {
  let order = false;
  let winLose = false;

  const handleSortSwitch = () => {
    order = !order;
    const sortedGames = [...games].sort((a, b) => {
      if(order === false) {
        return a.etm < b.etm ? 1 : -1;
      } else {
        return a.etm > b.etm ? 1 : -1;
      }
    });
    sortGames(sortedGames);
  }

  const removeLosses = () => {
    winLose = !winLose;
    const losses = document.querySelectorAll('.indyloss');
    const winBtn = document.getElementById('winBtn');
    for (const loss of losses) {
      if(winLose === true) {
        loss.style.display = 'none';
        winBtn.innerText = 'Be real';
      } else {
        loss.style.display = 'block';
        winBtn.innerText = 'Make it a winning season!';
      }
    }
  }
  return (
    <div className="sortButtons">
      <button onClick={handleSortSwitch}>Sort switch</button>
      <button onClick={removeLosses} id="winBtn">Make it a winning season!</button>
    </div>
  )
}

Sort.propTypes = {
  sortGames: PropTypes.func.isRequired
}

export default Sort
