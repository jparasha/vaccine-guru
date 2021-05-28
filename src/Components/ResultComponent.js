import { Fragment, useEffect, useRef, useState } from 'react';
import './results.css';
import { manageEvents, isMobile } from '../utils';
import Loader from './Loader';
import Tile from './Tile';
import Modal from './Modal';
import Notification from './Notification';


const handleRedirect = (event, isAvailable) => {
    manageEvents(event);
    const url = isAvailable ? 'https://www.cowin.gov.in/home' : '';
    if (url) {
        window.open(url, '_blank');
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
        manageEvents(e);
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
            <div className='center__title'>
                <Tile transparent data={`${_min_age_limit.includes(18) ? '18' : '45'}+${_vaccine.join(' | ').toUpperCase()}`} />
                <h5 className='no-margin center__title-primary'><strong>{name}</strong><hr /></h5>
                <h6 className='no-margin center__title-secondary'>{`${district_name}, ${state_name}`}</h6>
            </div>
            <div className={'center__buttons'}>
                <button className={`center__button transparent`} onClick={updateModal}>
                    MORE DETAILS
                </button>
                <button
                    onClick={e => (handleRedirect(e, isAvailable))}
                    className={`center__button ${(isAvailable) ? '' : 'un-available'}`}
                    disabled={!isAvailable}>
                    {isAvailable ? 'Book Now' : 'No Slots'}
                </button>
            </div>
            <div className='card__fee-type'>
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
            const _vaccine = [];
            sessions.forEach((session = {}) => {
                const { available_capacity = '', min_age_limit = '', vaccine = '' } = session;
                min_age_limit && _min_age_limit.push(min_age_limit);
                _available_capacity[min_age_limit] = _available_capacity[min_age_limit] += available_capacity;
                ((!_vaccine.includes(vaccine)) && _vaccine.push(vaccine));
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
        let hasEighteenPlus = false;
        center.sessions.forEach((session = {}) => {
            sessionsAvailability += (session.available_capacity);
            hasEighteenPlus = hasEighteenPlus || session.min_age_limit === 18;
            if (underFortyFive && available) {
                isMatching = hasEighteenPlus && sessionsAvailability > 0;
            } else if (underFortyFive) {
                isMatching = isMatching ? isMatching : hasEighteenPlus;
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
        document.body.style.overflow = 'auto';
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
            <Notification />
            <Modal
                show={visible}
                modalData={modalData}
                handleClose={updateVisible}
                handleRedirect={handleRedirect}
            />
        </Fragment>
    );
};

export default ResultComponent;
