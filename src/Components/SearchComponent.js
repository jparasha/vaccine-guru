import { useState } from 'react';
import './search.css';

const manageEvents = event => {
    event.preventDefault();
    event.stopPropagation();
};

const SearchComponent = ({ data = {}, searchHandler }) => {
    const [pinCode, setPinCode] = useState('');
    let _inputRef = null;


    const onPinChange = (event = {}) => {
        manageEvents(event);
        const { value = '' } = event.target || {};
        if (!(/^\d*$/.test(value)) || value.length > 6) {
            return false;
        } else {
            (value !== pinCode) && setPinCode(value);
            return true;
        }
    };

    const onSearch = event => {
        manageEvents(event);
        if (pinCode.length === 6) {
            _inputRef && _inputRef.blur();
            searchHandler && searchHandler(pinCode);
        } else {
            _inputRef && _inputRef.focus();
        }
    };
    console.log(pinCode);

    return (
        <div className='search-component'>
            <form className='search'>
                <h3 className='flex-item'>{data.INPUT_LABEL}</h3>
                <input
                    id='mainInput'
                    ref={ref => _inputRef = ref}
                    type='text'
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={pinCode}
                    onChange={onPinChange}
                    className='search__input flex-item'
                    placeholder={data.input_placeholder || ''}
                />


                <button type='submit' className='search__button flex-item' onClick={onSearch}>
                    {data.search_button_text || 'check'}
                </button>

            </form>
        </div>
    );

};

export default SearchComponent;
