import React from 'react'
import './index.css'

const Card = ({ data }) => {
    const {name, image, price} = data;

    return (
        <div className="card">
            <div>
              <img className="image" src={image.url} alt={image.alt} />
            </div>
            <div>
              <div className="name"><b>Product:</b> {name}</div>
              <div className="price"><b>Price:</b> {price}</div>
            </div>
        </div>
    )
}

export default Card;