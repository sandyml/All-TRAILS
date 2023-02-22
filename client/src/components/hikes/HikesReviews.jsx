import React from 'react';


const HikesReviews = ({ location, handleDelete }) => {
  const { hike_trails } = location;

  return (
    <div className="box-top">
        <span className='testimonial-box-container'>
          {hike_trails.map(
            (ht) => (<div key={ht}>
              <ul className="name-user">
                <strong >{ht.user.account_name}</strong>
                <span>{ht.format_date}</span>
              </ul>
              <span className="reviews" key={ht.id}></span>
              {ht.review}
              <button className='button2' type="edit">Edit</button>
              <button className='button2' onClick={() => handleDelete(ht.id)} type="delete">Remove</button>
              <hr/></div>))}
      </span>
    </div>
  );
}

export default HikesReviews;