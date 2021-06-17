import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const CardWrapper = ({ children, title, details }) => {
    return (
        <div className="card">
            <div className="card-details">
                <h2>{title}</h2>
                {details}
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
    details: PropTypes.element,
    title: PropTypes.string.isRequired
}

CardWrapper.defaultProps = {
    details: null
}

export default CardWrapper;