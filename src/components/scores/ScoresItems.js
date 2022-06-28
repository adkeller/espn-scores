import React from "react";
import { Link } from "react-router-dom";

const ScoresItems = ({game: { gid, stt, etm, v, h }}) => {
  const gameDate = () => {
    const gDate = new Date(etm);
    const mConv = gDate.getMonth() + 1;
    return [" | " + mConv + "/" + gDate.getDate()]
  }
  function pacersLose() {
    if(v.s > h.s && h.ta === 'IND') {
      return 'indyloss'
    } else if(v.s < h.s && v.ta === 'IND') {
      return 'indyloss'
    } else {
      return ''
    }
  }
  return (
    <div className={`game ${pacersLose()}`}>
      <Link to={`/recap/${gid}`}>
        <div>
          <div className="status"><strong>{stt}</strong> {gameDate()}</div>
          <div className="gameDetail">
            <img src={`https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${v.ta.toLowerCase()}.gif`} alt={`${v.tc} ${v.tn}`} />
            <div className={v.s > h.s ? 'winner' : ''}>
              <span>{v.ta}</span>
              <strong>{v.s}</strong>
            </div>
          </div>
          <div className="gameDetail">
            <img src={`https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${h.ta.toLowerCase()}.gif`} alt={`${h.tc} ${h.tn}`} />
            <div className={v.s < h.s ? 'winner' : ''}>
              <span>{h.ta}</span>
              <strong>{h.s}</strong>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ScoresItems