import { Fragment } from 'react';
import './Tile.css';

const newTabIcon = text => (
    <a className='link__new-tab' href='https://www.cowin.gov.in/home'>
        {text}&nbsp;
        <img className='link__new-tab-icon' src='/tab.png' alt='opens in new tab' />
    </a>
);

const getTruncatedText = (text, transparent) => ((!transparent && text.length > 13) ? text.substr(0, 11) + '..' : text);

const getButton = text => (newTabIcon(text));

const getText = (text, marked) => {
    if (marked) {
        const initial = text.substr(0, 3);
        const rest = text.substr(3);
        return (
            <Fragment>
                <span className={'mark content'}>{initial}</span>
                <span className={'content'}>{rest}</span>
            </Fragment>
        );
    }
    else {
        return (<span className={'content'}>{text}</span>);
    }
};

const Tile = ({ data, transparent, bold, button, marked = true }) => {
    if (!data) {
        return null;
    }
    return (
        <span className={`tile ${transparent ? 'transparent' : ''} ${bold ? 'bold' : ''}`}>
            {button ?
                getButton(data)
                :
                getText(getTruncatedText(data, transparent), marked)
            }

        </span >
    );
};

export default Tile;
