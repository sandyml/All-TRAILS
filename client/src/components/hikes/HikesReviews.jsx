import React, { useState } from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';

const HikesReviews = ({ location, handleDelete }) => {
  const { hike_trails } = location;
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleSeeEditForm = () => {
    (showEditForm === false) ? setShowEditForm(true) :
      setShowEditForm(false);
  };

  const toggleSeeAddForm = () => {
    (showAddForm === false) ? setShowAddForm(true) :
      setShowAddForm(false);
  };

  return (
    // <div className="box-top">
    // <div className='testimonial-box-container'>
    <div>
      {hike_trails.map(
        (ht) => (
          <div key={ht}>
            <ul className="name-user">
              <strong >{ht.user.account_name}</strong>
              <span>{ht.format_date}</span>
            </ul>
            <div className="reviews"></div>
            {ht.review}

            <>
              <button className='button2' onClick={toggleSeeEditForm}>Add</button>
              {showEditForm ? <AddForm location={location} ht={ht} /> : null}
            </>

            <>
              <button className='button2' onClick={toggleSeeAddForm}>Edit</button>
              {showAddForm ? <EditForm location={location} ht={ht} key={ht.id} /> : null}
            </>

            {/* <Link to="/hike_trails/new">Add &nbsp;</Link>
            <Link to={`/hike_trails/${ht.id}/edit`}>Edit</Link> */}
            <button className='button2' onClick={() => handleDelete(ht.id)} type="delete">Remove</button>
            <hr />
          </div>
        ))}

      {/* <>
          <button className='location-btn' onClick={toggleSeeEditForm}>
            Add </button>
          {showEditForm ? <AddForm location={location} /> : null}
        </>&nbsp; */}

      {/* <>
          <button className='location-btn' onClick={toggleSeeAddForm}>Edit </button>
          {showAddForm ? <EditForm location={location} key={location.id} /> : null}
        </> */}

    </div>
    // </div>
  );
}

export default HikesReviews;