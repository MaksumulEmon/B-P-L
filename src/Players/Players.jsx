import React, { use } from 'react';

const Players = ({playersPromise}) => {
    // console.log(playersPromise);
    const data = use(playersPromise);
    console.log(data);
    return (
        <div>
            <h2>Player:{data.length}</h2>
        </div>
    );
};

export default Players;