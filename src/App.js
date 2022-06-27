import { useEffect, useState } from 'react';
import Scores from './components/scores/Scores'
import './App.css';
import Sort from './components/sort/Sort';

const App = () => {

  const [games, setGames] = useState([]);
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

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <div>
      <Sort games={games} sortGames={sortGames} />
      <Scores loading={loading} games={games} />
    </div>
  );
}

export default App;
