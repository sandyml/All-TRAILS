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
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/hike_trails" element={<HikeList />} />
            <Route path="/hike_trails/:id" element={<HikeItems />} />
          </Routes>
          <Footer />
        </HikeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
