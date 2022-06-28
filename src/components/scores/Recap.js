import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from "prop-types";

const Recap = ({getGame, game, loading}) => {

  const {
    an,
    ac,
    as,
    etm,
    stt,
    vls: {
      s: vs = '',
      tn: vtn = '',
      tc: vtc = '',
      ta: vta = 'ind',
      q1: vq1 = '',
      q2: vq2 = '',
      q3: vq3 = '',
      q4: vq4 = ''
    } = {},
    hls: {
      s: hs = '',
      tn: htn = '',
      tc: htc = '',
      ta: hta = 'ind',
      q1: hq1 = '',
      q2: hq2 = '',
      q3: hq3 = '',
      q4: hq4 = ''
    } = {},
  } = game;


  let { gameid } = useParams();

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
        <div className={"vteam" + (vs > hs ? ' winner' : '')}>
          <div className="team">
            <div className="teamName">{vtc} {vtn}</div>
            <div className="teamRecord">53-29, 22-19 Away</div>
          </div>
          <div className="teamLogo"><img src={`https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${vta.toLowerCase()}.gif`} alt={`${vtc} ${vtn}`} /></div>
          <div className="teamScore">{vs}</div>
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
                <td>{vta}</td>
                <td>{vq1}</td>
                <td>{vq2}</td>
                <td>{vq3}</td>
                <td>{vq4}</td>
                <td>{vs}</td>
              </tr>
              <tr>
                <td>{hta}</td>
                <td>{hq1}</td>
                <td>{hq2}</td>
                <td>{hq3}</td>
                <td>{hq4}</td>
                <td>{hs}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={"hteam" + (vs < hs ? ' winner' : '')}>
          <div className="teamScore">{hs}</div>
          <div className="teamLogo"><img src={`https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_80x64/${hta.toLowerCase()}.gif`} alt={`${htc} ${htn}`} /></div>
          <div className="team">
            <div className="teamName">{htc} {htn}</div>
            <div className="teamRecord">53-29, 22-19 Away</div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Recap.propTypes= {
  getGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Recap
