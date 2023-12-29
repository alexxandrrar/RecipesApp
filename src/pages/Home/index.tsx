import React from 'react';
import './styles.scss';
import Button from 'components/common/Button';
import Search from 'components/common/Search';
import { useNavigate } from 'react-router';

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="home">
            <div>
                <div className="titles">
                    <h1>Welcome to Recipe Finder</h1>
                    <p>Discover a world of flavors right at your fingertips.</p>
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
