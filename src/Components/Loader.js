import { Fragment } from 'react';
import './loader.css';

const CardSkeleton = () => {
    return (
        <div className="center card is-loading">
            <div className="center__title">
                <h6 className="center__title-secondary">{/*  */}</h6>
                <h5 className="center__title-primary">{/*  */}</h5>
            </div>
            <div className='center__tiles'>
                <span className='tile'></span>
                <span className='tile'></span>
                <span className='tile'></span>
            </div>
        </div>
    );
};

const Results = () => {
    return (
        <Fragment>
            <div className='results-container is-loading'>
                <h2 className='result-count'>{/*  */}</h2>
                <div className='search__filters'>
                    <h3>{/*  */}</h3>
                </div>
                <div className='search__filters'>
                    <h3>{/*  */}</h3>
                </div>
            </div>
        </Fragment>
    );
};

const ResultsContainer = ({ count = 0 }) => {
    const cards = [];
    let cardNumbers = 1;
    cards.push(<Results />);
    while (cardNumbers <= count) {
        cards.push(<CardSkeleton key={cardNumbers} />);
        cardNumbers++;
    }
    return (cards);
};


const Loader = ({ count = 0 }) => {
    return (
        <div className='centers' id='resultCenters' >
            <ResultsContainer count={count} />
        </div>
    );
};

export default Loader;
