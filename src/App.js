import Topbar from './components/topbar/Topbar';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/posts'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;