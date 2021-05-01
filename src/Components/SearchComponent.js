import { useState } from 'react';
import './search.css';

const manageEvents = event => {
    event.preventDefault();
    event.stopPropagation();
};

const SearchComponent = ({ data = {}, searchHandler }) => {
    const [pinCode, setPinCode] = useState('');

    const onPinChange = (event = {}) => {
        manageEvents(event);
        const { value = '' } = event.target || {};
        value !== pinCode && setPinCode(value);
    };

    const onSearch = event => {
        manageEvents(event);
        (searchHandler && pinCode.length === 6) && searchHandler(pinCode);
    };

    return (
        <div className='container'>
            <form className='search'>
                <div className='search__row'>
                    <input
                        required
                        type='number'
                        value={pinCode}
                        onChange={onPinChange}
                        className='search__input'
                        placeholder={data.input_placeholder || ''}
                    />
                </div>
                <div className='search__row'>
                    <button type='submit' className='search__button' onClick={onSearch}>
                        {data.search_button_text || 'check'}
                    </button>
                </div>
            </form>
        </div>
    );

};

export default SearchComponent;
