import React from 'react';
import './styles.scss';
import Button from '../../components/common/Button';
import Search from '../../components/common/Search';

export const Home = () => {
    return (
        <div className="home">
            <div>
                <div className="titles">
                    <h1>Welcome to Recipe Finder</h1>
                    <p>Discover a world of flavors right at your fingertips.</p>
                </div>
                <div className="actions">
                    <Button className="start-btn">Get Start</Button>
                    <Search placeholder='Find recipe' value={''} onChange={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                </div>
            </div>
        </div>
    );
};
