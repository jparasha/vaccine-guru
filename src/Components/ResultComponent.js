import './results.css';
import { Fragment, useState } from 'react';
import Tile from './Tile';

const ResultComponent = ({ response = {}, errors = null, data: CONSTANTS = {}, setRef }) => {
    const { centers = [] } = response || {};
    const [underFortyFive, setUnderFortyFive] = useState(false);



    const setFilter = () => setUnderFortyFive(!underFortyFive);

    const filteredCenters = () => {
        if (!underFortyFive) {
            return centers;
        }
        return centers.filter((center = {}) => {
            let isUnderFortyFive = false;
            center.sessions.forEach((session = {}) => {
                isUnderFortyFive = session.min_age_limit === 18;
            });
            return isUnderFortyFive;
        });
    };
    const centerData = filteredCenters();
    console.log(centerData, underFortyFive);
    return (
        <Fragment>
            <div className='centers' id='resultCenters' ref={ref => setRef(ref)}>
                {
                    (errors !== null) &&
                    <div className='results-container'>
                        <h2 className='result-count'><strong>{`${centerData.length} ${CONSTANTS.RESULTS_FOUND}`}</strong></h2>
                        {centers.length > 0 && <span className='result-count filters'>
                            <h3>18+</h3>
                            <input type="checkbox" id="switch" checked={underFortyFive} onChange={setFilter} />
                            <label htmlFor="switch" tabIndex='0'>18+</label>
                        </span>}
                    </div>
                }
                {
                    (errors) ?
                        <div className='center' >
                            {CONSTANTS.ERROR_MSG || ''}
                        </div>
                        :
                        centerData.map(
                            (center = {}, index = '') => {
                                const { district_name = '', name = '', state_name = '', fee_type = '', from = '', to = '', sessions = [] } = center;
                                const _available_capacity = { 18: 0, 45: 0 }, _min_age_limit = [], _to = to.substr(0, 2);
                                let _vaccine = '';
                                sessions.forEach((session = {}) => {
                                    const { available_capacity = '', min_age_limit = '', vaccine = '', date = '' } = session;
                                    min_age_limit && _min_age_limit.push(min_age_limit);
                                    _available_capacity[min_age_limit] = _available_capacity[min_age_limit] += available_capacity;
                                    _vaccine = _vaccine || vaccine;
                                });
                                return (
                                    <div className='center' key={index}>
                                        <div className='center__title'>
                                            <h6 className='no-margin center__title-secondary'>{`${district_name}, ${state_name}`}</h6>
                                            <h5 className='no-margin center__title-primary'><strong>{name}</strong></h5>
                                            <span>slots this week</span>
                                            <h6 className='no-margin'>
                                                <strong>{`45+ : ${_available_capacity[45] ? (_available_capacity[45].toFixed()) : '0'}`}</strong>
                                            </h6>
                                            <h6 className='no-margin'>
                                                <strong>{`18+ : ${_available_capacity[18] ? (_available_capacity[18].toFixed()) : '0'}`}</strong>
                                            </h6>
                                        </div>
                                        <div className='center__tiles'>
                                            <Tile data={`${_min_age_limit.includes(18) ? '18' : '45'} + `} />
                                            <Tile data={`${_vaccine}`} />
                                            <Tile data={`${`${from.substr(0, 2)}AM - ${_to > 12 ? (_to - 12) : _to}PM`}`} />
                                        </div>
                                        <div className='card__age-limit'>
                                            <div>{`${fee_type}`}</div>
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
