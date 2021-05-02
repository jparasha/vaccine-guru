import './Tile.css';

const Tile = ({ data }) => {
    if (!data) {
        return null;
    }
    return (
        <span className='tile'>
            {data}
        </span>
    );
};

export default Tile;
