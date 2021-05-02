import './App.css';
import { useState, useEffect } from 'react';
import CONSTANTS from './constants.json';
import axios from './interceptor';
import { getFormattedDate } from './utils';
import SearchComponent from './Components/SearchComponent';
import ResultComponent from './Components/ResultComponent';

function App() {

  const [hospitals, setHospitals] = useState(null);
  const [errors, setErrors] = useState(null);

  let resultRef = null;

  const setResultRef = ref => (resultRef = (resultRef || ref));

  useEffect(() => {
    const getMyIp = () => {
      fetch('//api.ipify.org?format=json')
        .then(response => response.json())
        .then(res => {
          console.log(res.ip, 'ip');
        })
        .catch((err: any) => console.error('Problem fetching my IP', err));
    };
    getMyIp();
  }, []);

  const searchHandler = pin => {
    console.log(pin, getFormattedDate());
    const isProduction = (process.env.NODE_ENV === 'production');
    axios.get(isProduction ? `calendarByPin?pincode=${pin}&date=${getFormattedDate()}` : '')
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

  return (
    <div className="App">
      <SearchComponent
        data={CONSTANTS}
        searchHandler={searchHandler}
      />
      {<ResultComponent
        response={hospitals}
        data={CONSTANTS}
        errors={errors}
        setRef={setResultRef}
      />}
    </div>
  );
}

export default App;
