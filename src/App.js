import React, {useState, useEffect} from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';

function App() {
  let intervalID;
  const [time, setTime] = useState("00:00 am")

  useEffect(()=>{
    intervalID = setInterval(()=>setTime(moment().format('hh:mm a'))
    , 5000)
    return ()=>clearInterval(intervalID) 
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="time">{time}</div>
      </header>
    </div>
  );
}

export default App;
