import { Fragment, useEffect, useRef, useState } from 'react';
import './results.css';
import { manageEvents, isMobile } from '../utils';
import Tile from './Tile';
import Loader from './Loader';
import Modal from './Modal';


const handleRedirect = (event, isAvailable) => {
    manageEvents(event);
    const url = isAvailable ? 'https://www.cowin.gov.in/home' : '';
    if (url) {
        window.location.href = url;
    }
};

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

const Card = ({ index, district_name, state_name, name, _min_age_limit, _vaccine, _available_capacity, from, _to, sessions, fee_type, handleClose, updateModalData }) => {

    const updateModal = e => {
        updateModalData({
            district_name,
            state_name,
            name,
            _min_age_limit,
            _vaccine,
            _available_capacity,
            from,
            _to,
            sessions,
            fee_type
        });
        handleClose(e);
    };


    const isAvailable = (_available_capacity[45] || _available_capacity[18]);
    return (
        <div className='center' key={index}>
            {/* <div className='center__title-tiles center__tiles'>
                        <Tile data={`45+ : ${_available_capacity[45] ? (_available_capacity[45].toFixed()) : 'No'} slots`} bold transparent />
                        <Tile data={`18+ : ${_available_capacity[18] ? (_available_capacity[18].toFixed()) : 'No'} slots`} bold transparent />
                        <Tile data={(_available_capacity[45] || _available_capacity[18]) ? 'book' : ''} bold transparent button />

                    </div> */}
            <div className='center__title'>
                <h6 className='no-margin center__title-secondary'>{`${district_name}, ${state_name}`}<hr /></h6>
                <h5 className='no-margin center__title-primary'><strong>{name}</strong></h5>
            </div>
            <div className={'center__buttons'}>
                <button className={`center__button transparent`} onClick={updateModal}>
                    MORE DETAILS
                </button>
                <button className={`center__button ${(isAvailable) ? '' : 'un-available'}`} disabled={!isAvailable}>
                    {isAvailable ? 'Book Now' : 'No Slots'}
                </button>
                {/*  <a href='#' onClick={(e, isAvailable) => handleRedirect(e, isAvailable)} className={`center__button transparent ${(isAvailable) ? 'available' : 'un-available'}`}>
                    {isAvailable ? 'Book Now' : 'No Slots'}
                </a>
                <a href='#' role='button' className={'center__button'} onClick={updateModal}>MORE DETAILS</a> */}
            </div>
            {/* { visible && <div className='center__tiles'>
                <Tile data={`${_min_age_limit.includes(18) ? '18' : '45'} + `} />
                <Tile data={`${_vaccine}`} />
                <Tile data={`${`${from.substr(0, 2)}AM - ${_to > 12 ? (_to - 12) : _to}PM`}`} />
            </div>
            } */}
            <div className='card__age-limit'>
                <div>{`${fee_type}`}</div>
            </div>
            <img className='card__image' src='/injection.svg' alt='vaccine' />
        </div>
    );
};

const Cards = ({ CONSTANTS, centerData, errors, sorting, handleClose, updateModalData }) => {
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
                const { available_capacity = '', min_age_limit = '', vaccine = '' } = session;
                min_age_limit && _min_age_limit.push(min_age_limit);
                _available_capacity[min_age_limit] = _available_capacity[min_age_limit] += available_capacity;
                _vaccine = _vaccine || vaccine;
            });
            return (
                <Card
                    index={index}
                    district_name={district_name}
                    state_name={state_name}
                    name={name}
                    _min_age_limit={_min_age_limit}
                    _vaccine={_vaccine}
                    _available_capacity={_available_capacity}
                    from={from}
                    _to={_to}
                    fee_type={fee_type}
                    sessions={sessions}
                    handleClose={handleClose}
                    updateModalData={updateModalData}
                />
            );
        });
};

const filteredCenters = (underFortyFive, available, sorting, setSorting, centers) => {
    if (!underFortyFive && !available) {
        sorting && setTimeout(() => setSorting(false), 800);
        return centers;
    }
    const filtered = centers.filter((center = {}) => {
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
        return isMatching;
    });
    sorting && setTimeout(() => setSorting(false), filtered.length ? 800 : 10);
    return filtered;
};

const ResultComponent = ({ response = {}, errors = null, data: CONSTANTS = {}, loader = false }) => {
    const { centers = [] } = response || {};
    const [underFortyFive, setUnderFortyFive] = useState(false);
    const [available, setAvailable] = useState(false);
    const [sorting, setSorting] = useState(false);
    const [visible, setVisible] = useState(false);
    const [modalData, setModalData] = useState(null);
    const resultRef = useRef(null);

    const updateVisible = e => {
        manageEvents(e);
        setVisible(!visible);
    };

    const updateModalData = data => setModalData(data);

    const setFilter = () => {
        !sorting && setSorting(true);
        setUnderFortyFive(!underFortyFive);
    };
    const setAvailability = () => {
        !sorting && setSorting(true);
        setAvailable(!available);
    };

    useEffect(() => {
        if (resultRef && resultRef.current && loader && !errors) {
            const options = { block: 'start', inline: 'nearest' };
            resultRef.current.scrollIntoView(isMobile ? options : { ...options, behavior: 'smooth' });
        }
    }, [resultRef, loader, errors]);

    const centerData = filteredCenters(underFortyFive, available, sorting, setSorting, centers);
    return (
        <Fragment>
            <div className={`centers ${(loader) ? 'loader-section' : ''}`} id='resultCenters' ref={resultRef}>
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
                            <Cards
                                errors={errors}
                                sorting={sorting}
                                CONSTANTS={CONSTANTS}
                                centerData={centerData}
                                handleClose={updateVisible}
                                updateModalData={updateModalData} />
                        </Fragment>
                }
            </div>
            <Modal
                show={visible}
                modalData={modalData}
                handleClose={updateVisible}
            />
        </Fragment>
    );
};

export default ResultComponent;
