import React from "react";
import ScoresItems from './ScoresItems';
import Spinner from '../layout/Spinner';
import PropTypes from "prop-types";

const Scores = ({games, loading}) => {
  if(loading) {
    return <Spinner />
  } else {
    return (
      <div className="gameGrid">
        {games.map(game => (
          <ScoresItems key={game.gid} game={game} />
        ))}
      </div>
    );
  }
};

Scores.propTypes= {
  games: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Scores