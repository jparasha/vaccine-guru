import './results.css';
import { Fragment, useEffect } from 'react';
import Tile from './Tile';

const ResultComponent = ({ response = {}, errors = null, data: CONSTANTS = {}, setRef }) => {
    const { centers = [] } = response || {};

    console.log(centers);
    return (
        <Fragment>
            <div className='centers' id='resultCenters' ref={ref => setRef(ref)}>
                {
                    (errors !== null) && <h2 className='container result-count'>{`${centers.length} ${CONSTANTS.RESULTS_FOUND}`}</h2>
                }
                {
                    (errors) ?
                        <div className='center' >
                            {CONSTANTS.ERROR_MSG || ''}
                        </div>
                        :
                        centers.map(
                            (center = {}, index = '') => {
                                const { district_name = '', name = '', state_name = '', fee_type = '', from = '', to = '', sessions = [] } = center;
                                let _available_capacity = '', _min_age_limit = '', _vaccine = '';
                                return (
                                    <div className='center' key={index}>
                                        <div className='center__title'>
                                            <h6 className='no-margin center__title-secondary'>{`${district_name}, ${state_name}`}</h6>
                                            <h5 className='no-margin center__title-primary'><strong>{name}</strong></h5>
                                        </div>
                                        {
                                            sessions.forEach((session = {}) => {
                                                const { available_capacity = '', min_age_limit = '', vaccine = '', date = '' } = session;
                                                _available_capacity = _available_capacity || available_capacity;
                                                _min_age_limit = _min_age_limit || min_age_limit;
                                                _vaccine = _vaccine || vaccine;
                                            })
                                        }
                                        <div className='center__tiles'>
                                            <Tile data={`${_min_age_limit} + `} />
                                            <Tile data={`${_vaccine || ''}`} />
                                            <Tile data={`${_available_capacity.toFixed() || 'not'} available`} />
                                        </div>
                                        <div className='card__age-limit'>
                                            <div>{`${fee_type}`}</div>
                                            <div>{`${from.substr(0, 5)} - ${to.substr(0, 5)}`}</div>
                                        </div>
                                    </div>
                                );
                            })
                }
            </div>
        </Fragment>
    );
};

export default ResultComponent;
