
import React from 'react';
import PropTypes from 'prop-types'
import AnimalDetails from '../animal-details';
import CardWrapper from '../card-wrapper';
import './index.css';

// export default function AnimalCard () {
//     return <h2>Animal</h2>
// }
const AnimalCard = ({ name, size, additional, showAdditional, ...props }) => {
    // const { name, scientificName, size, diet } = props;
    return (
        <CardWrapper title="Animal">
            <h2>{name}</h2>
            {/* <h3>{scientificName}</h3> */}
            <h4>{size}kg</h4>
            {/* <div>{diet.join(', ')}.</div> */}
            <AnimalDetails 
                {...props}
            />
            <button onClick={() => showAdditional(additional)}>More info</button>
        </CardWrapper>
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