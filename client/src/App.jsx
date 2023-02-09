import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/static/Home';
import { UserProvider } from './components/context/UserContext';
import Signin from './components/authentication/Signin';
import Signout from './components/authentication/Signout';
import Signup from './components/authentication/Signup';
import HikeList from './components/hikes/HikeList';
import HikeItems from './components/hikes/HikeItems';
import About from './components/static/About';
import Navigation from './components/navigation/Navigation';
import Footer from './components/static/Footer';
// import Navbar from './components/navigation/Navbar';

const App = () => {
  return (
    <div className="app-div">
      <UserProvider>
        {/* <Navbar /> */}
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/logout" element={<Signout/>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/hike_trails" element={<HikeList />} />
          <Route exact path="/hike_trails/:id" element={<HikeItems />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
