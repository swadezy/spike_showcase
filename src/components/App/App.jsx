import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import MonthList from '../MonthList/MonthList.jsx';
import Header from '../Header/Header.jsx'
import Chart from '../Chart/Chart.jsx'

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
      <h1>Amount I want t-bell as the week goes on</h1>
      <Chart />
      {/* <Header
        clicked={clicked}
      />
      <MonthList
        monthItems={monthItems}
        setClicked={setClicked}
      /> */}
    </div>
  );
}


export default App;
