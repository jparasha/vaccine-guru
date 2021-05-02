import './App.css';
import { useState } from 'react';
import CONSTANTS from './constants.json';
import axios from './interceptor';
import { getFormattedDate } from './utils';
import SearchComponent from './Components/SearchComponent';
import ResultComponent from './Components/ResultComponent';


function App() {

  const [hospitals, setHospitals] = useState(null);
  const [errors, setErrors] = useState(null);


  const searchHandler = pin => {
    console.log(pin, getFormattedDate());
    const isProduction = (process.env.NODE_ENV === 'production');
    axios.get(isProduction ? `calendarByPin?pincode=${pin}&date=${getFormattedDate()}` : '')
      .then(({ data = {} }) => {
        setHospitals(data);
        setErrors(false);
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
      />}
    </div>
  );
}

export default App;
