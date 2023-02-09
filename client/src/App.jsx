import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/static/Home';
import { UserProvider } from './components/context/UserContext';
import { HikeProvider } from './components/context/HikeContext';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Signup from './components/authentication/Signup'
import HikeList from './components/hikes/HikeList';
import HikeItems from './components/hikes/HikeItems';
import About from './components/static/About';
import Navigation from './components/navigation/Navigation';
import Footer from './components/static/Footer';

const App = () => {
  return (
    <div className="app-div">
      <UserProvider>
        <HikeProvider>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/signup" element={<Signup />} />
            {/* <Route exact path="/reviews" element={<Reviews />} /> tentative component*/} 
            <Route exact path="/hike_trails" element={<HikeList />} />
            <Route exact path="/hike_trails/:id" element={<HikeItems />} />
          </Routes>
        </HikeProvider>
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;
