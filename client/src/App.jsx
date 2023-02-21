import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/static/Home';
import { UserProvider } from './components/context/UserContext';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Signup from './components/authentication/Signup'
import About from './components/static/About';
import Navigation from './components/navigation/Navigation';
import Footer from './components/static/Footer';
import NotFound from './components/static/NotFound';
import LocationList from './components/hikes/LocationList';
import { LocationProvider } from './components/context/LocationContext';

const App = () => {
  return (
    <UserProvider>
      <LocationProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/locations" element={<LocationList />} />
        </Routes>
        <Footer />
      </LocationProvider>
    </UserProvider>
  );
}

export default App;
