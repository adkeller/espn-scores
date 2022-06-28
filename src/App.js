import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recap from './components/scores/Recap';
import Scores from './components/scores/Scores';
import Sort from './components/sort/Sort';
import './App.css';

const App = () => {

  const [games, setGames] = useState([]);
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchGames = async () => {
    setLoading(true);
    await fetch("https://data.nba.net/data/10s/v2015/json/mobile_teams/nba/2021/teams/pacers_schedule.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setGames(data.gscd.g)
      })
    setLoading(false);
  }

  const sortGames = games => {
    setLoading(true);
    setGames(games);
    setLoading(false);
  }

  const getGame = gameid => {
    setLoading(true);
    fetch(`https://data.nba.net/data/10s/v2015/json/mobile_teams/nba/2021/scores/gamedetail/${gameid}_gamedetail.json`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setGame(data.g)
      })
    setLoading(false);
  }

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={
            <Fragment>
              <Sort games={games} sortGames={sortGames} />
              <Scores games={games} loading={loading} />
            </Fragment>
          } />
          <Route exact path='/recap/:gameid' element={ <Recap getGame={getGame} game={game} loading={loading} /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
