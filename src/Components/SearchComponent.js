import { Fragment } from 'react';
import './search.css';


const SearchComponent = ({ data = {}, searchHandler, pinCode = '', state = '', district = '', onPinChange,
    allStates = [], allDistricts = [], manageEvents, searchByPin, onStateChange, onDistrictChange, onFormChange }) => {

    let _inputRef = null, _stateRef = null, _districtRef = null;

    const onSearch = event => {
        manageEvents(event);
        if (searchByPin) {
            if (pinCode.length === 6) {
                _inputRef && _inputRef.blur();
                searchHandler && searchHandler(pinCode);
            } else {
                _inputRef && _inputRef.focus();
            }
        } else {
            if (district && district > 0) {
                searchHandler && searchHandler(district);
            } else {
                !state > 0 && _stateRef.focus();
                state > 0 && !district > 0 && _districtRef.focus();
            }
        }
    };

    console.log(pinCode, allStates, allDistricts);

    return (
        <div className='search-component'>
            <img className='search__image' src='/vaccine.jpg' alt='vaccine' />
            <form className='search__form'>
                <h3 className='flex-item'>{searchByPin ? data.INPUT_LABEL : data.DISTRICT_SEARCH_LABEL}</h3>
                {searchByPin ?
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
                    :
                    <Fragment>
                        <select ref={ref => _stateRef = ref} className='search__input flex-item' value={state} onChange={onStateChange}>
                            <option key={0} value={0}>{'select state'}</option>
                            {
                                allStates.map(({ state_name = '', state_id = '' }) => <option key={'state' + state_id} value={state_id}>{state_name}</option>)
                            }
                        </select>
                        <select ref={ref => _districtRef = ref} className='search__input flex-item' value={district} onChange={onDistrictChange}>
                            <option key={0} value={0}>{'select district'}</option>
                            {
                                allDistricts.map(
                                    ({ district_name = '', district_id = '' }) => (<option key={'district' + district_id} value={district_id}>{district_name}</option>))
                            }
                        </select>
                    </Fragment>}
                <button type='submit' className='search__button flex-item' onClick={onSearch}>
                    {data.search_button_text || 'check'}
                </button>
                <hr />
                <button className='toggle__button flex-item' onClick={onFormChange}>
                    {searchByPin ? data.SEARCH_BY_DISTRICT : data.SEARCH_BY_PIN}
                </button>
            </form>
        </div>
    );
};

export default SearchComponent;
