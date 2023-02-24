import React, { Suspense, useState, useEffect } from 'react'
import EditForm from '../hikes/EditForm'
import { HikeContext } from '../context/HikeContext'



const Dashboard = () => {
 const { handleAddReview } = useContext(HikeContext);
 // const [reviews, setReviews] = useState([])

 // useEffect(() => {
 //  fetch('/hike_trails')
 //   .then((resp) => resp.json())
 //   .then(data => {
 //    console.log(data)
 //    setReviews(data)
 //   })
 // },[])

 // const handleAddReview = (newRev) => {
 //  setReviews(reviews => [...reviews, newRev])
 // }

 // let reviewCards = allReviews.map(rev => <ScientistCard key={rev.id} review={rev} onDelete={handleDeleteReview}/>)

 return (
  <>
   <EditForm handleAddReview={handleAddReview} edit={false} />
  </>
 )
}

export default Dashboard
