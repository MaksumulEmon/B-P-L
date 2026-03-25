import React from 'react';
import Card from '../Ui/Card';

const Available = ({ players,setCoin, coin }) => {
    console.log(players, "players");

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 container mx-auto'>

            {
                players.map(player => {
                    console.log(player);
                    return (
                    <Card player={player} setCoin={setCoin} coin={coin} ></Card>
                    )
                })}
        </div>


    );
};

export default Available;