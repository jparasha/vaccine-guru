import './search.css';


const SearchComponent = ({ data = {}, searchHandler, pinCode = '', onPinChange, manageEvents }) => {

    let _inputRef = null;

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
            <img className='search__image' src='/vaccine.jpg' alt='vaccine' />
            <form className='search__form'>
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
