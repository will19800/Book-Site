import React from 'react'
import './StarRating.css'

const starRating = ({rating}) => {
    const starsStyle = {
        width: `${(rating / 5) * 100}%`
      };
    
    console.log(rating)

      return (
        <div className="star-rating">
          <div className="stars-outer">
            <div className="stars-inner" style={starsStyle}></div>
          </div>
        </div>
      );
    }

export default starRating