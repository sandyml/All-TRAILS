import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/static/Home';

const App = () => {
  return (
    <div className="App-div">
      <h1>App Component</h1>

      <Router>
        <Switch>
          <Route path="/"><Home/></Route>
          <Route></Route>
          <Route></Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
