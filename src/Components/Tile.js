import './Tile.css';

const newTabIcon = text => (
    <a className='link__new-tab' href='https://www.cowin.gov.in/home'>
        {text}&nbsp;
        <img className='link__new-tab-icon' src='/tab.png' alt='opens in new tab' />
    </a>
);

const getTruncatedText = (text, transparent) => ((!transparent && text.length > 13) ? text.substr(0, 11) + '..' : text);

const getButton = text => (newTabIcon(text));

const Tile = ({ data, transparent, bold, button }) => {
    if (!data) {
        return null;
    }
    return (
        <span className={`tile ${transparent ? 'transparent' : ''} ${bold ? 'bold' : ''}`}>
            {button ?
                getButton(data)
                :
                getTruncatedText(data, transparent)
            }

        </span>
    );
};

export default Tile;
