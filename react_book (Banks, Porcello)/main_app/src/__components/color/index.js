import React from 'react';
import { PropTypes } from 'prop-types';

import StarRating from '../starRating';

const Color = ({ title, code, rating, onRate=f=>f, onRemove=f=>f }) => {
    return <li>
        <h2 className="color__title">{title}</h2>
        <div className="color__background" style={{ backgroundColor: code }}>{code}</div>
        <button type="button" onClick={onRemove}>Удалить цвет</button>
        <div className="color__rating">
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </li>
}

StarRating.propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    rating: PropTypes.number,
    onRate: PropTypes.func,
    onRemove: PropTypes.func,
};

export default Color;