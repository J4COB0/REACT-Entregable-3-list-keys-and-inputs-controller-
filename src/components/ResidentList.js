import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({residents}) => {
    return (
        <div className='resident-list'>
            
            <h2>Residents</h2>
            {
                residents?.map(resident => 
                    <ResidentInfo 
                        url={resident} 
                        key={resident} 
                />)
            }
        </div>
    );
};

export default ResidentList;