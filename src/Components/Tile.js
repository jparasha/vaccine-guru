import './Tile.css';

const Tile = ({ data = '' }) => {
    return (
        <span className='tile'>
            {data}
        </span>
    );
};

export default Tile;
