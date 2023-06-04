import React from 'react'
import "../CSS/LinkCommunity.css"
import arrowRight from "../Images/arrow_right.png";
import { Link } from 'react-router-dom';

function LinkCommunity() {
  return (
    <Link className='community' to='/community' style={{ textDecoration: "none" }}>
    <div className='LinkContainer'>
      <h3 className='linkText'>Go To Community</h3> <img src={arrowRight} alt='이동'></img>
    </div>
    </Link>
  )
}

export default LinkCommunity