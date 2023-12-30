import React from 'react';
import Button from 'components/common/Button';
import Search from 'components/common/Search';
import { useNavigate } from 'react-router';
import RecipeCard from 'components/recipe/RecipeCard';

import './styles.scss';

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="home">
            <div className="content">
                <div className="title">
                    <h1>Welcome to Recipe Finder</h1>
                    <p>Discover a world of flavors right at your fingertips.</p>
                </div>
                <div className="inner">
                    <RecipeCard name={'Spanish Tortilla'} description={'Put a large non-stick frying pan on a low heat. Cook the onion slowly in the oil and butter until soft but not brown – this should take about 15 mins. Add the potatoes, cover the pan and cook for a further 15-20 mins, stirring occasionally to make sure they fry evenly.\r\nWhen the potatoes are soft and the onion is shiny, crush 2 garlic cloves and stir in, followed by the beaten eggs.\r\nPut the lid back on the pan and leave the tortilla to cook gently. After 20 mins, the edges and base should be golden, the top set but the middle still a little wobbly. To turn it over, slide it onto a plate and put another plate on top, turn the whole thing over and slide it back into the pan to finish cooking. Once cooked, transfer to a plate and serve the tortilla warm or cold, scattered with the chopped parsley.\r\nTo accompany, take slices of warmed baguette, stab all over with a fork and rub with the remaining garlic, pile on grated tomatoes and season with sea salt and a drizzle of olive oil.'} imageUrl={'https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg'} />
                    <div className="button-container"><Button>Read full recipe...</Button></div>
                </div>

                <div className="actions">
                    <Button className="start-btn" onClick={() => navigate('/recipes')}>Get Recipe</Button>
                    <Search placeholder='Find recipe' value={''} onChange={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                </div>
            </div>
        </div>
    );
};
