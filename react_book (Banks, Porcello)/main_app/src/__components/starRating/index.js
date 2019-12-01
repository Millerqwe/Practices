import React from 'react';
import { PropTypes } from 'prop-types';

import Star from '../star';


const StarRating = ({ totalStars=5, starsSelected=0, onRate=f=>f }) => 
    <div className="star-rating">
        {
            [...Array(totalStars)].map( (_, i) => 
            <Star key={i}
                selected={i<starsSelected} 
                onClick={() => onRate(i+1)}/> 
            )
        }
    </div>

StarRating.propTypes = {
    onRate: PropTypes.func
};

export default StarRating;