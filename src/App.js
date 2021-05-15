import './App.css';
import axios from './interceptor';
import CONSTANTS from './constants.json';
import { useState, useEffect, useRef } from 'react';
import ResultComponent from './Components/ResultComponent';
import SearchComponent from './Components/SearchComponent';
import { getFormattedDate, manageEvents, getUserZip } from './utils';

function App() {

  const userPinLoaded = useRef(false);
  const [state, setState] = useState('');
  const [allStates, setAllStates] = useState([]);
  const [pinCode, setPinCode] = useState('');
  const [district, setDistrict] = useState('');
  const [allDistricts, setAllDistricts] = useState([]);
  const [hospitals, setHospitals] = useState(null);
  const [searchByPin, setSearchByPin] = useState(true);
  const [errors, setErrors] = useState(null);

  let resultRef = null;
  const setResultRef = ref => (resultRef = (resultRef || ref));
  const isProduction = (process.env.NODE_ENV === 'production');
  const { REACT_APP_BASE_URL = '', REACT_APP_IP_URL = '', REACT_APP_ZIP_URL = '', REACT_APP_STATES_URL = '', REACT_APP_DISTRICTS_URL = '' } = process.env || {};

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

  const onStateChange = (event = {}) => {
    manageEvents(event);
    const { value = '' } = event.target || {};
    state !== value && setState(value);
    if (value > 0) {
      const URL = isProduction ? `${REACT_APP_DISTRICTS_URL}/${value}` : '/services/districts.json';
      axios.get(URL)
        .then(({ data = {} }) => {
          data.districts && setAllDistricts(data.districts);
        })
        .catch(err => console.error(err));
    }

  };

  const onDistrictChange = (event = {}) => {
    manageEvents(event);
    const { value = '' } = event.target || {};
    district !== value && setDistrict(value);
  };

  const searchHandler = location => {
    let URL = `${REACT_APP_BASE_URL}/${searchByPin ? 'calendarByPin?pincode' : 'calendarByDistrict?district_id'}=${location}&date=${getFormattedDate()}`;
    console.log(URL);
    if (!isProduction) {
      URL = '/services/847211.json';
    }
    axios.get(URL)
      .then(({ data = {} }) => {
        setHospitals(data);
        setErrors(false);
        if (resultRef) {
          setTimeout(() => {
            resultRef.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          });
        }
      })
      .catch(() => setErrors(true));
  };

  const onFormChange = (event = {}) => {
    manageEvents(event);
    setSearchByPin(!searchByPin);
  };

  useEffect(() => {
    const getPin = async () => {
      if (!pinCode) {
        await getUserZip(REACT_APP_IP_URL, REACT_APP_ZIP_URL, isProduction)
          .then(zip => (zip && pinCode !== zip) && setPinCode(zip))
          .catch(() => {/*  */ });
      }
    };
    if (!userPinLoaded.current) {
      getPin();
      userPinLoaded.current = true;
    }
  }, [REACT_APP_IP_URL, REACT_APP_ZIP_URL, isProduction, pinCode]);

  useEffect(() => {
    const URL = isProduction ? REACT_APP_STATES_URL : '/services/states.json';
    axios.get(URL)
      .then(({ data = {} }) => {
        data.states && setAllStates(data.states);
      })
      .catch(err => console.error(err));
  }, [REACT_APP_STATES_URL, isProduction]);

  return (
    <div className="App">
      <SearchComponent
        state={state}
        data={CONSTANTS}
        pinCode={pinCode}
        district={district}
        allStates={allStates}
        searchByPin={searchByPin}
        allDistricts={allDistricts}
        onPinChange={onPinChange}
        onFormChange={onFormChange}
        manageEvents={manageEvents}
        searchHandler={searchHandler}
        onStateChange={onStateChange}
        onDistrictChange={onDistrictChange}
      />
      {<ResultComponent
        errors={errors}
        data={CONSTANTS}
        response={hospitals}
        setRef={setResultRef}
      />}
    </div>
  );
}

export default App;
