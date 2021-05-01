import './results.css';
import { Fragment } from 'react';
import Tile from './Tile';

const ResultComponent = ({ response = {}, errors = false, data: CONSTANTS = {} }) => {
    const { centers = [] } = response || {};

    console.log(centers);

    return (
        <Fragment>
            {(centers && centers.length) && <h2 className='container result-count'>{`${centers.length} ${CONSTANTS.RESULTS_FOUND}`}</h2>}
            <div className='centers'>
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
                                            <h5 className='no-margin center__title-primary'><strong>{name}</strong></h5>
                                            <h6 className='no-margin center__title-secondary'>{`${district_name}, ${state_name}`}</h6>
                                        </div>
                                        <div className='center__tiles'>
                                            <Tile data={fee_type} />
                                            <Tile data={`${from}-${to}`} />
                                        </div>
                                        {
                                            sessions.map((session = {}, idx = '') => {
                                                const { available_capacity = '', min_age_limit = '', vaccine = '', date = '' } = session;
                                                _available_capacity = _available_capacity || available_capacity;
                                                _min_age_limit = _min_age_limit || min_age_limit;
                                                _vaccine = _vaccine || vaccine;
                                                return (
                                                    <div className='center__cards' key={`${idx}__${index}`}>
                                                    </div>
                                                );
                                            })
                                        }
                                        <div className='card__age-limit'>
                                            <div>{`${_min_age_limit}+ age`}</div>
                                            <div>{`${_available_capacity || 'not'} available`}</div>
                                            <div>{`${_vaccine || 'coviShield'}`}</div>
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
