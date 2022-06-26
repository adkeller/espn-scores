import { useEffect, useState } from 'react';
import Scores from './components/scores/Scores'
import './App.css';
import Sort from './components/sort/Sort';

const App = () => {

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch("https://data.nba.net/data/10s/v2015/json/mobile_teams/nba/2021/teams/pacers_schedule.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setGames(data.gscd.g)
      })
  }

  const sortGames = games => {
    setGames(games)
  }

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <div>
      <Sort games={games} sortGames={sortGames} />
      <Scores games={games} />
    </div>
  );
}

export default App;
