import './App.css';
// import React, { useEffect, useState } from 'react';
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
import HikesReviews from './components/hikes/HikesReviews';

const App = () => {
  // const {locations} = useContext(LocationContext);

  // const locationCards = locations.map(
  //   location =>
  //     <LocationCard
  //       key={location.id}
  //       location={location}
  //     />
  // )

  return (
    <UserProvider>
      <LocationProvider>
        <HikeProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/locations" element={<LocationList />} />
            <Route path="/hike_trails" element={<HikesReviews />} />
            <Route path="/hike_trails/new" element={<AddForm />} />
            <Route path="/hike_trails/:id" element={<EditForm />} />
            <Route path="/placeholder" element={<AddReviewForm />} />
            <Route path="/termsandconditions" element={<TermsPolicy />} />
          </Routes>
          <Footer />
        </HikeProvider>
      </LocationProvider>
    </UserProvider>
  );
}

export default App;
