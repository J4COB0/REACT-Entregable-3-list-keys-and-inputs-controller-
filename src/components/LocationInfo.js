import React from 'react';

const LocationInfo = ({location}) => {
    
    return (
        <div className='container-locationInfo'>
            <h2>{location.name}</h2>
            <div className='locationInfo-info'>
                <h3><b>Type:</b> {location.type}</h3>
                <h3><b>Dimension:</b> {location.dimension}</h3>
                <h3><b>Population:</b> {location.residents?.length}</h3>
            </div>
        </div>
    );
};

export default LocationInfo;