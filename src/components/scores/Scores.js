import React from "react";
import ScoresItems from './ScoresItems';

const Scores = ({games}) => {
  return (
    <div className="gameGrid">
      {games.map(game => (
        <ScoresItems key={game.gid} game={game} />
      ))}
    </div>
  );
};

export default Scores