import React, { useContext } from 'react';
import { LocationContext } from '../context/LocationContext';
import LocationCard from './LocationCard';

const LocationList = () => {
  const { locations } = useContext(LocationContext);

  // // FETCH FROM LOCATIONCONTEXT
  // const [locations, setLocations] = useState([]);
  // const [reviews, setReviews] = useState([])
  // FETCH FROM LOCATIONCONTEXT
  // useEffect(() => {
  //   fetch("/locations")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data, "Location Fetch")
  //       setLocations(data)
  //       // setReviews(data)
  //     })
  //     .catch((error) => console.log(error, "An error occurred.")
  //     );
  // }, []);

  const locationCards = locations.map(
    location =>
      <LocationCard
        key={location.id}
        location={location}
      />
  )

  return (
    <div className="testimonial-heading">
        <span>Hikes & Reviews</span>
      {locationCards}
    </div>
  )
}

export default LocationList;
