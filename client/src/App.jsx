import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/static/Home';
import { UserProvider } from './components/context/UserContext';
import { HikeProvider } from './components/context/HikeContext';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Signup from './components/authentication/Signup'
import HikeList from './components/hikes/HikeList';
import HikeCard from './components/hikes/HikeCard';
import About from './components/static/About';
import Navigation from './components/navigation/Navigation';
import Footer from './components/static/Footer';
import NotFound from './components/static/NotFound';

const App = () => {

// Add Reviews 
// const addReview = (review) => {
//   setReviews([review, ...reviews])
// } 

// DELETE
// const onDeleteReview = (delR) => {
//   const updateReview = reviews.filter(review => review.id !== delR.id)
//   setReviews(updateReview)
// }

return (
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
        <Route path="/not_found" element={<NotFound />} />
        <Route path="/hike_trails" element={<HikeList
        
        // reviews={reviews} 
        // onDeleteReview={onDeleteReview} 
        />}
        />
        <Route path="/hike_trails/:id" element={<HikeCard
        // reviews={reviews} 
        // onDeleteReview={onDeleteReview} 
        />}
        />
        {/* <Route path="/hike_trails/new" element={<Form addReview={addReview} />} /> */}
      </Routes>
      <Footer />
    </HikeProvider>
  </UserProvider>
);
}

export default App;
