import { useEffect, useState } from 'react';
import Scores from './components/scores/Scores'
import './App.css';

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

  function handleSortDesc() {
    const sortedGames = [...games].sort((a,b) => {
      return a.etm < b.etm ? 1 : -1;
    })
    setGames(sortedGames);
  }

  function handleSortAsc() {
    const sortedGames = [...games].sort((a,b) => {
      return a.etm > b.etm ? 1 : -1;
    })
    setGames(sortedGames);
  }

  function removeLosses() {
    const losses = document.querySelectorAll('.indyloss');
    for (const loss of losses) {
      loss.style.display = 'none';
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <div>
      <div className="sortButtons">
        <button onClick={handleSortDesc}>Sort in descending order</button>
        <button onClick={handleSortAsc}>Sort in ascending order</button>
        <button onClick={removeLosses}>Remove Losses</button>
      </div>
      <Scores games={games} />
    </div>
  );
}

export default App;
