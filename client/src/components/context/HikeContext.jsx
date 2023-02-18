import React, { createContext, useState, useEffect } from 'react';

// create the context object (default value)
const HikeContext = createContext();

// create the context provider (component)
const HikeProvider = ({ children }) => {
  const [hikes, setHikes] = useState([]);
  // const [displayReviews, setDisplayReviews] = useState([])
  // const [createReviews, setCreateReviews] = useState([]); // if I want to create edit for more reviews 

  useEffect(() => {
    const fetchHikes = () => {
      fetch("/hike_trails")
        .then((resp) => resp.json())
        .then((hikeData) => setHikes(hikeData))
        .catch((error) => console.log(error, "An error occurred.")
        );
    };
    fetchHikes();
  }, []);

  // console.log(hikes)
  // debugger

  return (
    <HikeContext.Provider value={ hikes }>
      {children}
    </HikeContext.Provider>
  )
}

export { HikeContext, HikeProvider };
