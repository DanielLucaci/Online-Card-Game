import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default Card;