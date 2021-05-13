import './App.css';
import axios from './interceptor';
import CONSTANTS from './constants.json';
import { useState, useEffect, useRef } from 'react';
import ResultComponent from './Components/ResultComponent';
import SearchComponent from './Components/SearchComponent';
import { getFormattedDate, manageEvents, getUserZip } from './utils';

function App() {

  const userPinLoaded = useRef(false);
  const [errors, setErrors] = useState(null);
  const [pinCode, setPinCode] = useState('');
  const [hospitals, setHospitals] = useState(null);

  let resultRef = null;
  const setResultRef = ref => (resultRef = (resultRef || ref));
  const isProduction = (process.env.NODE_ENV === 'production');
  const { REACT_APP_BASE_URL = '', REACT_APP_BASE_URL_DEV = '', REACT_APP_IP_URL = '', REACT_APP_ZIP_URL = '' } = process.env || {};

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

  const searchHandler = pin => {
    console.log(pin, getFormattedDate());
    axios.get(isProduction ? `${REACT_APP_BASE_URL}/calendarByPin?pincode=${pin}&date=${getFormattedDate()}` : '/services/847211.json')
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

  return (
    <div className="App">
      <SearchComponent
        data={CONSTANTS}
        pinCode={pinCode}
        onPinChange={onPinChange}
        manageEvents={manageEvents}
        searchHandler={searchHandler}
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
