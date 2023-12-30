import React from 'react';
import './styles.scss'

interface IRecipeCard {
    name: string;
    description: string;
    imageUrl: string;
    id?: string
}

const RecipeCard: React.FC<IRecipeCard> = ({ name,description,imageUrl,id,}) => {
    return (
        <div className='recipe-card' id={id}>
            <div className='info'>
                <div><img src={imageUrl} /></div>
                <h1>{name}</h1>
            </div>
            <div className='description'>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default RecipeCard;
