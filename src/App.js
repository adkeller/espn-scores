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

  const getGame = async gameid => {
    setLoading(true);
    await fetch(`https://data.nba.net/data/10s/v2015/json/mobile_teams/nba/2021/scores/gamedetail/${gameid}_gamedetail.json`)
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


// class App extends Component {
//   state = {
//     games: [],
//     loading: false
//   }

//   async componentDidMount() {
//     this.setState({ loading: true });
//     await fetch("https://data.nba.net/data/10s/v2015/json/mobile_teams/nba/2021/teams/pacers_schedule.json")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         this.setState({ games: data.gscd.g })
//       })
//     this.setState({ loading: false })
//   }

//   sortGames = games => {
//     this.setState({ loading: true });
//     this.setState({ games: games });
//     this.setState({ loading: false })
//   }

//   render() {
//     return (
//       <Fragment>
//         <Sort games={this.state.games} sortGames={this.sortGames} />
//         <Scores loading={this.state.loading} games={this.state.games} />
//       </Fragment>
//     );
//   }
// }

export default App;
