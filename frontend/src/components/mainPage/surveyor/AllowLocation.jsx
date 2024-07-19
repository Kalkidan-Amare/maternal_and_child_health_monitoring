// AllowLocation.js
import React from 'react';
import useGeolocation from './hooks/useGeolocation';

const AllowLocation = () => {
    const { location, error } = useGeolocation();
    
    if(error){
        return <h1>locaton error</h1>
    }

    return (
        <div>
            <h1>Current Location</h1>
                <>
                    <p>Latitude: {location.lat}</p>
                    <p>Longitude: {location.lon}</p>
                </>
        </div>
    );
};

export default AllowLocation;
