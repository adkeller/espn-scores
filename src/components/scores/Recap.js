import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const Recap = ({getGame, game, loading}) => {

  const {
    an,
    ac,
    as,
    etm,
    vls,
    hls,
    stt
  } = game;

  const { gameid } = useParams();

  useEffect(() => {
    getGame(gameid)
    // eslint-disable-next-line
  }, []);

  const gameDate = () => {
    const gDate = new Date(etm);
    const mConv = gDate.getMonth() + 1;
    return [mConv + "/" + gDate.getDate() +  "/" + gDate.getFullYear()]
  }

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div className="gameRecap">
        <Link to='/' className="return">More Games</Link>
        <div className="gameOverview">{an}, {ac}, {as}, {gameDate()}</div>
        <div className="gameDetails">
          <div className={"vteam" + (vls.s > hls.s ? ' winner' : '')}>
            <div className="team">
              <div className="teamName">{vls.tc} {vls.tn}</div>
              <div className="teamRecord">53-29, 22-19 Away</div>
            </div>
            <div className="teamLogo"><img src={`https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${vls.ta.toLowerCase()}.gif`} alt={`${vls.tc} ${vls.tn}`} /></div>
            <div className="teamScore">{vls.s}</div>
          </div>
          <div className="boxScore">
            <div className="gameStatus">{stt}</div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>T</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{vls.ta}</td>
                  <td>{vls.q1}</td>
                  <td>{vls.q2}</td>
                  <td>{vls.q3}</td>
                  <td>{vls.q4}</td>
                  <td>{vls.s}</td>
                </tr>
                <tr>
                  <td>{hls.ta}</td>
                  <td>{hls.q1}</td>
                  <td>{hls.q2}</td>
                  <td>{hls.q3}</td>
                  <td>{hls.q4}</td>
                  <td>{hls.s}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={"hteam" + (vls.s < hls.s ? ' winner' : '')}>
            <div className="teamScore">{hls.s}</div>
            <div className="teamLogo"><img src={`https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${hls.ta.toLowerCase()}.gif`} alt={`${hls.tc} ${hls.tn}`} /></div>
            <div className="team">
              <div className="teamName">{hls.tc} {hls.tn}</div>
              <div className="teamRecord">53-29, 22-19 Away</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Recap
