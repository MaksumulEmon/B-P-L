import React from 'react';
import Card from '../Ui/Card';

const Available = ({ players }) => {
    console.log(players, "players");

    return (

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 container mx-auto'>

            {
                players.map(player => {
                    console.log(player);
                    return (
                    <Card player={player}></Card>
                    )
                })}
        </div>


    );
};

export default Available;