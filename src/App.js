import React, {useState, useEffect} from 'react';
import moment from 'moment';
import './App.css';

function App() {
  const [time, setTime] = useState("00:00 am")

  useEffect(()=>{
    const intervalID = setInterval(()=>setTime(moment().format('hh:mm a'))
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
