import React, {useState, useEffect} from 'react';
import moment from 'moment';
import './App.css';

function App() {
  const [time, setTime] = useState(null)

  useEffect(()=>{
    const intervalID = setInterval(()=>setTime(moment().format('HH:mm'))
    , 5000)
    return ()=>clearInterval(intervalID) 
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        { time && <div className="time">{time} KST</div>}
        
      </header>
    </div>
  );
}

export default App;
