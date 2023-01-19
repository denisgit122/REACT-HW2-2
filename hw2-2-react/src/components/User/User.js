import React from 'react';

const User = ({user}) => {
    const {flight_number, mission_name, launch_year}=user
    return (
        <div>
            <h1>{flight_number}----{ launch_year}-----{mission_name}</h1>

        </div>
    );
};

export default User;