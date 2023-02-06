import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/static/Home';
import Signin from './components/authentication/Signin';
import Signout from './components/authentication/Signout';
import Signup from './components/authentication/Signup';
import HikeList from './components/hikes/HikeList';

const App = () => {
  return (
    <div className="App-div">
      <h1>App Component</h1>

      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/home" element={Home} />
          <Route path="/hike_trails" />
          <Route path="/hike_trails/:id" element={HikeList} />
          <Route path="/signup" element={Signup} />
          <Route path="/login" element={Signin} />
          <Route path="/logout" element={Signout} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
