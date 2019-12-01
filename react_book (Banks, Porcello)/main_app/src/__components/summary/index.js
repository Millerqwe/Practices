import React from 'react';
import { PropTypes } from 'prop-types';


class Summary extends React.Component {
    render() {
        const {title, ingredients, steps} = this.props;

        return <div>
            <p>{title}</p>
            <p>{ingredients.length}</p>
            <p>{steps.length}</p>
        </div>
    }
};

Summary.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired
};

Summary.defaultProps = {
    title: 'Заголовок по умолчанию',
    ingredients: ['no', 'no'],
    steps: ['no', 'no'],
};

export default Summary;