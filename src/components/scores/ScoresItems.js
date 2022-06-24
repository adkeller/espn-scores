import React from "react";

const ScoresItems = ({game}) => {
  const gameDate = () => {
    const gDate = new Date(game.etm);
    return [" | " + gDate.getMonth() + "/" + gDate.getDate()]
  }
  function pacersLose() {
    if(game.v.s > game.h.s && game.h.ta === 'IND') {
      return 'indyloss'
    } else if(game.v.s < game.h.s && game.v.ta === 'IND') {
      return 'indyloss'
    } else {
      return ''
    }
  }
  return (
    <div className={`game ${pacersLose()}`}>
      <div className="status"><strong>{game.stt}</strong> {gameDate()}</div>
      <div className="gameDetail">
        <img src={`https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${game.v.ta.toLowerCase()}.gif`} alt={`${game.v.tc} ${game.v.tn}`} />
        <div className={game.v.s > game.h.s ? 'winner' : ''}>
          <span>{game.v.ta}</span>
          <strong>{game.v.s}</strong>
        </div>
      </div>
      <div className="gameDetail">
        <img src={`https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${game.h.ta.toLowerCase()}.gif`} alt={`${game.h.tc} ${game.h.tn}`} />
        <div className={game.v.s < game.h.s ? 'winner' : ''}>
          <span>{game.h.ta}</span>
          <strong>{game.h.s}</strong>
        </div>
      </div>
    </div>
  );
};

export default ScoresItems