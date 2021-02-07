import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import MonthList from '../MonthList/MonthList.jsx';
import Header from '../Header/Header.jsx'

function App() {

  const [monthItems, setMonthItems] = useState([])
  const [clicked, setClicked] = useState('make a selection')

  useEffect(() => getMonths(), []);

  const getMonths = () => {
    console.log('in get months');
    axios.get('/calendar')
      .then((response) => {
        setMonthItems(response.data)
      }).catch((error) => {
        console.log('received error', error);
      })
  }

  return (
    <div className="App">
      <Header
        clicked={clicked}
      />
      <MonthList
        monthItems={monthItems}
        setClicked={setClicked}
      />
    </div>
  );
}


export default App;
