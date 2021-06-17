import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const convertFood = (food) => {
    switch(food) {
        case 'insects':
            return '🐜'
        case 'meat':
            return '🍖'
        case 'plants': 
            return '🌱'
        default: 
            return '🌱';
    }
}

const AnimalDetails = ({ diet, scientificName }) => {
    return (
        <div className="details">
            <h4>Details:</h4>
            <div>
                Scientific Name: {scientificName}
            </div>
            <div>
                Diet: {diet.map((food) => convertFood(food)).join(' ')}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired
}

export default AnimalDetails;