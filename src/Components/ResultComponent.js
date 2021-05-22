import './results.css';
import { Fragment, useState } from 'react';
import Tile from './Tile';
import Loader from './Loader';

const newTabIcon = text => (
    <a className='link__new-tab' href='https://www.cowin.gov.in/home'>
        {text}&nbsp;
        <img className='link__new-tab-icon' src='/tab.png' alt='opens in new tab' />
    </a>
);

const FilterRibbon = ({ centers, centerData, underFortyFive, setFilter, available, setAvailability, CONSTANTS }) => {
    return (
        <div className='results-container'>
            <h2 className='result-count'><strong>{`${centerData.length} ${CONSTANTS.RESULTS_FOUND}`}</strong></h2>
            {centers.length > 0 && <span className='result-count filters'>
                <div className='search__filters'>
                    <h3>18+</h3>
                    <input type="checkbox" id="switch_age" checked={underFortyFive} onChange={setFilter} />
                    <label htmlFor="switch_age" tabIndex='0'>18+</label>
                </div>
                <div className='search__filters'>
                    <h3>&nbsp;available</h3>
                    <input type="checkbox" id="switch_available" checked={available} onChange={setAvailability} />
                    <label htmlFor="switch_available" tabIndex='0'>available</label>
                </div>
            </span>}
        </div>
    );
};

const Cards = ({ CONSTANTS, centerData, errors, sorting }) => {
    if (errors) {
        return (
            <div className='center' >
                {CONSTANTS.ERROR_MSG || ''}
            </div>
        );
    }
    if (sorting) {
        return (
            <Loader count={6} />
        );
    }
    return centerData.map(
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
                        <span>slots this week: {(_available_capacity[45] || _available_capacity[18]) ? newTabIcon('book') : ''}</span>
                        <h6 className='no-margin'>
                            <strong>{`45+ : ${_available_capacity[45] ? (_available_capacity[45].toFixed()) : '0'}`}&nbsp;</strong>
                        </h6>
                        <h6 className='no-margin'>
                            <strong>{`18+ : ${_available_capacity[18] ? (_available_capacity[18].toFixed()) : '0'}`}&nbsp;</strong>
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
                    <img className='card__image' src='/injection.svg' alt='vaccine' />
                </div>
            );
        });
};

const filteredCenters = (underFortyFive, available, sorting, setSorting, centers) => {
    if (!underFortyFive && !available) {
        sorting && setSorting(false);
        return centers;
    }
    return centers.filter((center = {}) => {
        let isMatching = false;
        let sessionsAvailability = 0;
        center.sessions.forEach((session = {}) => {
            sessionsAvailability += (session.available_capacity);
            if (underFortyFive && available) {
                isMatching = session.min_age_limit === 18 && sessionsAvailability > 0;
            } else if (underFortyFive) {
                isMatching = session.min_age_limit === 18;
            } else {
                isMatching = sessionsAvailability > 0;
            }
        });
        sorting && setSorting(false);
        return isMatching;
    });
};

const ResultComponent = ({ response = {}, errors = null, data: CONSTANTS = {}, loader = false, setRef }) => {
    const { centers = [] } = response || {};
    const [underFortyFive, setUnderFortyFive] = useState(false);
    const [available, setAvailable] = useState(false);
    const [sorting, setSorting] = useState(false);

    const setFilter = () => {
        setUnderFortyFive(!underFortyFive);
        !sorting && setSorting(true);
    };
    const setAvailability = () => {
        setAvailable(!available);
        !sorting && setSorting(true);
    };

    const centerData = filteredCenters(underFortyFive, available, sorting, setSorting, centers);

    return (
        <Fragment>
            <div className={`centers ${(loader) ? 'loader-section' : ''}`} id='resultCenters' ref={ref => setRef(ref)}>
                {
                    (loader)
                        ?
                        <Loader count={6} />
                        :
                        <Fragment>
                            {(errors !== null) &&
                                <FilterRibbon
                                    centers={centers}
                                    centerData={centerData}
                                    underFortyFive={underFortyFive}
                                    setFilter={setFilter}
                                    available={available}
                                    setAvailability={setAvailability}
                                    CONSTANTS={CONSTANTS} />
                            }
                            <Cards CONSTANTS={CONSTANTS} centerData={centerData} errors={errors} sorting={sorting} />
                        </Fragment>

                }
            </div>
        </Fragment>
    );
};

export default ResultComponent;
