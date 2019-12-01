import React from 'react';
import { PropTypes } from 'prop-types';

import Color from '../../color';

const ColorList = ({ colors, onRate=f=>f, onRemove=f=>f }) => 
    <ul className="color__list">
        {
            colors.map( color => 
                <Color key={color.id}
                    {...color} 
                    onRate={(rating) => onRate(color.id, rating)} 
                    onRemove={() => onRemove(color.id)}
                />
            )
        }
    </ul>


ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};

export default ColorList;