import React, {useState, useEffect} from 'react';
import moment from 'moment';
import './App.css';
import {FaTwitch} from 'react-icons/fa';
import {IoMdHeart} from 'react-icons/io';
import {AiFillSound} from 'react-icons/ai';

function App() {
	const [time, setTime] = useState(null);

	const iconStyle = {
		marginRight: '15px'
	};

	useEffect(() => {
		const intervalID = setInterval(() => setTime(moment().format('YYYY MMM Do (ddd) HH:mm')), 5000);
		return () => clearInterval(intervalID);
	}, []);

	return (
		<div className='App'>
			<div style={{fontWeight: 'bold', display: 'flex', alignItems: 'center'}}>
				<FaTwitch style={iconStyle} />
				<div>JEZZI</div>
			</div>
			<div style={{display: 'flex', alignItems: 'center'}}>
				<IoMdHeart style={iconStyle} />
				<AiFillSound style={iconStyle} />

				{time && <div className='time'>{time} KST</div>}
			</div>
		</div>
	);
}

export default App;
