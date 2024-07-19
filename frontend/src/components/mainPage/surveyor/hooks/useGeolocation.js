import { useState, useEffect } from 'react';

const useGeolocation = () => {
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        const showPosition = (position) => {
            setLocation({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        };

        const showError = (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    setError("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    setError("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    setError("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    setError("An unknown error occurred.");
                    break;
                default:
                    setError("An unknown error occurred.");
                    break;
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    return { location, error };
};

export default useGeolocation;