import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Schedule from './pages/schedule'
import Stats from './pages/stats'
import PlayerList from './pages/playerList'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/stats" exact component={Stats} />
        <Route path="/playerList" exact component={PlayerList} />
      </Switch>
    </Router>
  );
}

export default App;
