import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/static/Home';
import { UserProvider } from './components/context/UserContext';
import Navbar from './components/navigation/Navbar';
import Signin from './components/authentication/Signin';
import Signout from './components/authentication/Signout';
import Signup from './components/authentication/Signup';
import HikeList from './components/hikes/HikeList';
import HikeItems from './components/hikes/HikeItems';

const App = () => {
  return (
    <div className="app-div">
      <h1>App Component</h1>
      <UserProvider>
        <Navbar />
        {/* <Router> */}
          <Routes>
            <Route exact path="/" element={Home} />
            <Route path="/home" element={Home} />
            <Route path="/login" element={Signin} />
            <Route path="/logout" element={Signout} />
            <Route path="/signup" element={Signup} />
            <Route path="/hike_trails" element={HikeList} />
            <Route path="/hike_trails/:id" element={HikeItems} />
          </Routes>
        {/* </Router> */}
      </UserProvider>
    </div>
  );
}

export default App;
