import React from 'react'

const Reviews = () => {

  return (
    <div class="container">
      <form action="action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Username</label>
          </div>
          <div class="col-75">
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Location</label>
          </div>
          <div class="col-75">
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          </div>
        </div>
        {/* <div class="row">
          <div class="col-25">
            <label for="country">Review</label>
          </div>
          <div class="col-75"> */}
            {/* <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select> */}
          {/* </div> */}
        {/* </div> */}
        <div class="row">
          <div class="col-25">
            <label for="review">Review</label>
          </div>
          <div class="col-75">
            <textarea id="review" name="review" placeholder="Write something.." style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Reviews