import './App.css';
import { useState } from 'react';
import CONSTANTS from './constants.json';
import axios from './interceptor';
import { getFormattedDate } from './utils';
import SearchComponent from './Components/SearchComponent';
import ResultComponent from './Components/ResultComponent';


function App() {

  const [hospitals, setHospitals] = useState(null);
  const [errors, setErrors] = useState(false);


  const searchHandler = pin => {
    console.log(pin, getFormattedDate());
    axios.get(`calendarByPin?pincode=${pin}&date=${getFormattedDate()}`)
      .then(({ data = {} }) => setHospitals(data))
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
