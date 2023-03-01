import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/static/Home';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Signup from './components/authentication/Signup'
import About from './components/static/About';
import Navigation from './components/navigation/Navigation';
import Footer from './components/static/Footer';
import NotFound from './components/static/NotFound';
import { LocationProvider } from './components/context/LocationContext';
import { HikeProvider } from './components/context/HikeContext';
import TermsPolicy from './components/static/TermsPolicy';
import AddForm from './components/hikes/AddForm';
import EditForm from './components/hikes/EditForm';
import HikesReviews from './components/hikes/HikesReviews';
import { useState, useEffect } from 'react';
import ReviewList from './components/hikes/ReviewList';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // auto-login
    fetch('/me')
      .then(resp => resp.json())
      .then(data => {
        if(!data.errors) {
          handleLogin(data)
        } 
        setLoading(false)
      })
  }, [])

  const handleLogin = (user) => {
    setCurrentUser(user);
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setCurrentUser(null);
    setLoggedIn(false)
  }

  console.log(currentUser, "currentUser in App")

  // if (currentUser && currentUser.id) {
  //   return (
  //       <LocationProvider>
  //         <HikeProvider>
  //           <Routes>
  //             <Route path="/login" element={<Login setCurrentUser={setCurrentUser} handleLogin={handleLogin} loggedIn={loggedIn} loading={loading} />} />
  //             <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} handleLogin={handleLogin} loggedIn={loggedIn} loading={loading} />} />
  //             <Route path="/" element={<Home />} />
  //             <Route path="/logout" element={<Logout />} />
  //           </Routes>
  //         </HikeProvider>
  //       </LocationProvider>
  //   )
  // } else {
    return (
        <LocationProvider>
          <HikeProvider>
            <Navigation setCurrentUser={setCurrentUser} currentUser={currentUser} onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/about" element={<About loading={loading} loggedIn={loggedIn}  />} />
              <Route path="/login" element={<Login setCurrentUser={setCurrentUser} handleLogin={handleLogin} loggedIn={loggedIn} loading={loading} />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} handleLogin={handleLogin} loggedIn={loggedIn} loading={loading} />} />
              <Route path="/locations" element={<ReviewList currentUser={currentUser} loading={loading} loggedIn={loggedIn} />} />
              <Route path="/hike_trails" element={<HikesReviews currentUser={currentUser} loggedIn={loggedIn} loading={loading}  />} />
              <Route path="/hike_trails/new" element={<AddForm loading={loading} loggedIn={loggedIn}  />} />
              <Route path="/hike_trails/:id" element={<EditForm loading={loading} loggedIn={loggedIn} currentUser={currentUser} />} />
              <Route path="/termsandconditions" element={<TermsPolicy />} />
            </Routes>
            <Footer />
          </HikeProvider>
        </LocationProvider>
    );
  }
// }

export default App;
