import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user) => {
                    // have to specify 'key' for React to have a unique identifier
                    return (
                        <Card 
                            key={user.id} 
                            id={user.id} 
                            name={user.name} 
                            email={user.email} 
                        />);
                })
            }
        </div>
    );
}

export default CardList;