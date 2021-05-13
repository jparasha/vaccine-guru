import './Tile.css';

const Tile = ({ data }) => {
    if (!data) {
        return null;
    }
    return (
        <span className='tile'>
            {`${data.length > 13 ? data.substr(0, 10) + '...' : data}`}
        </span>
    );
};

export default Tile;
