import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(err => console.log(err))
    }, [url])

    return (
        <div className='card-resident'>
            <div className='character-image'>
                <img src={resident.image} alt="Character-Image" />
            </div>
            <div className='card-resident-info'>
                <h3>{resident.name}</h3>
                <div className='card-status'>
                    { 
                        (resident.status === 'Alive')
                            ? <i className="fas fa-circle status-simbol" style={{color:"green"}}></i>
                            : (resident.status === 'Dead')
                                ? <i className="fas fa-circle status-simbol" style={{color:"red"}}></i>
                                : <i className="fas fa-circle status-simbol" style={{color:"gray"}}></i> 
                    }
                    <span> {resident.status}</span>
                </div>
                <p><b>Origin: </b>{resident?.name}</p>
                <p><b>Episodes where appear: </b>{resident.episode?.length}</p>
            </div>
        </div>
    );
};

export default ResidentInfo;