
import React from 'react';
import PropTypes from 'prop-types'
import './index.css';

// export default function AnimalCard () {
//     return <h2>Animal</h2>
// }
const AnimalCard = ({ name, scientificName, size, diet, additional, showAdditional }) => {
    // const { name, scientificName, size, diet } = props;
    return (
        <div className="animal-wrapper">
            <h2>{name}</h2>
            <h3>{scientificName}</h3>
            <h4>{size}kg</h4>
            <div>{diet.join(', ')}.</div>
            <button onClick={() => showAdditional(additional)}>More info</button>
        </div>
    )
}

AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

AnimalCard.defaultProps = {
    additional: {
        notes: 'No additional Information.'
    }
}

// class AnimalCard extends React.Component {
//     render(){
//         return <h2>Animal</h2>
//     }
// }

// export default class AnimalCard extends Component {
//     componentWillMount(){

//     }
//     componentDidUpdate(){

//     }
//     componentWillUnmount(){

//     }
//         render(){
//             return <h2>Animal</h2>
//         }
//     }
// export default AnimalCard;
export default AnimalCard;