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
import { HikeProvider } from './components/context/HikeContext';
import Test from './components/static/Test';
import TermsPolicy from './components/static/TermsPolicy';
import AddForm from './components/hikes/AddForm';
import EditForm from './components/hikes/EditForm';
import AddReviewForm from './components/hikes/AddReviewForm';
// import { useEffect } from 'react';

const App = () => {
  // const [loading, setLoading] = useState(true);
  // const { loggedIn, setLoggedIn } = useContext(UserContext)

  // useEffect(() => {
  //   fetch('/me')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data, "me?")
  //       // setLoggedIn(data)
  //     })
  // }, []);

  return (
    <UserProvider>
      <LocationProvider>
        <HikeProvider>
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
            <Route path="/termsandconditions" element={<TermsPolicy />} />
            <Route path="/hike_trails/new" element={<AddForm />} />
            <Route path="/hike_trails/:id/edit" element={<EditForm />} />
            <Route path="/test" element={<Test />} />
            <Route path="/placeholder" element={<AddReviewForm />} />
          </Routes>
          <Footer />
        </HikeProvider>
      </LocationProvider>
    </UserProvider>
  );
}

export default App;
