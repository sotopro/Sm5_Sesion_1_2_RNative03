import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const CardWrapper = ({ children, title }) => {
    return (
        <div className="card">
            <div className="card-details">
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}

CardWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired
}

export default CardWrapper;