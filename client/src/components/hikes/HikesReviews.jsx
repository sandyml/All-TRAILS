import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/hike_trails/new" className='button2'>Add</Link>
            <Link to={`/hike_trails/${ht.id}/edit`}>Edit</Link>
            <button className='button2' onClick={() => handleDelete(ht.id)} type="delete">Remove</button>
            <hr /></div>))}
      </span>
    </div>
  );
}

export default HikesReviews;