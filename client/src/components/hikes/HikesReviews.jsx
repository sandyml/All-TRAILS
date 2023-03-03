import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import AddForm from './AddForm';
import EditForm from './EditForm';

const HikesReviews = ({ location, handleDelete}) => {
  const { hike_trails } = location;
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const { currentUser, loggedIn, loading } = useContext(UserContext);

  const toggleSeeEditForm = () => {
    (showEditForm === false) ? setShowEditForm(true) :
      setShowEditForm(false);
  };

  const toggleSeeAddForm = () => {
    (showAddForm === false) ? setShowAddForm(true) :
      setShowAddForm(false);
  };

  // console.log(hike_trails.user.id, "User")
  console.log(currentUser.id, currentUser, 'currentUser in HikesReviews')

  return (
    <>
      {hike_trails.map(
        (ht) => (
          <div key={ht.id}>
            {/* {console.log(ht.user.id, "inside map")} */}
            <ul className="name-user">
              <strong>{ht.user.account_name}</strong>
              <span>{ht.format_date}</span>
            </ul>
            {ht.review}
            <hr />
            
            {currentUser && currentUser.id === ht.user.id ?
              <>
                <>
                  <button className='button2' onClick={toggleSeeEditForm}>Add</button>
                  {showEditForm ? <AddForm location={location} ht={ht} /> : null}
                </>
                <>
                  <button className='button2' onClick={toggleSeeAddForm}>Edit</button>
                  {showAddForm ? <EditForm location={location} ht={ht} key={ht.id} /> : null}
                </>
                <button className='button2' onClick={() => handleDelete(ht.id)} type="delete">Remove</button>
                <hr />
              </> : null}
          </div>
        ))
      }
    </>
  )
}


export default HikesReviews;