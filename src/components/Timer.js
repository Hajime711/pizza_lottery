import React, { useEffect, useState } from 'react';
import './Timer.css';
import ConfettiEffect from './ConfettiEffect';
import axios from 'axios';

function Timer() {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isTimerEnded, setIsTimerEnded] = useState(false);
  const [boxes, setBookedBoxes] = useState([]);
  const [jsonobj, setJsonObj] = useState({});

  useEffect(() => {
    //6*60
    const timerDuration = 5 *6* 60000; // 6 hours in milliseconds
    const timerStartTime = localStorage.getItem('timerStartTime');
    const currentTime = Date.now();
    const handleTimeout = async() => {
      //get the updated data
      try {
        const response = await axios.get('http://localhost:5000/json');
        const jsonobj = response.data[response.data.length-1].data;
        console.log(jsonobj);
        if (Object.keys(jsonobj).length === 0 && jsonobj.constructor === Object) {
          console.log('jsonobj is empty');
        } else {
          const boxes = [].concat(...Object.values(jsonobj));
          console.log(boxes);
        }
      } catch (error) {
        console.error(error);
      }
      //choose a random number from the boxes 
      const randomIndex = Math.floor(Math.random() * boxes.length);
      const randomNumber = boxes[randomIndex];
      console.log('Random Number:', randomNumber);
      //find which user the number belongs to
      let winner = null;
      for (const username in jsonobj) {
        if (jsonobj[username].includes(randomNumber)) {
          winner = username;
          break;
        }
      }
      console.log('WINNER IS:');
      console.log(winner);
      console.log("total won:");
      console.log(0.01*boxes.length);
      
      //send the pool prize to the user
      // if (window.hive_keychain) {
      //   const keychain = window.hive_keychain;
      //   keychain.requestSendToken('admin-pizza',winner, '0.010', 'Opening Lottery Box', 'PIZZA', (response) => {
      //     if (response.success === true){
      //         console.log('TOKENS SENT!');  
      //     }
      //     console.log(response);
      //   });
      // }
      //clear data in db
      try {
        const response = await axios.post('http://localhost:5000/json', {});
        console.log(response.data); 
      } catch (error) {
        console.error(error);
      }
      //upload winner in list in db
      setIsTimerEnded(true);
      //Reset the timer by updating the timer start time
      const timerStartTime = Date.now();
      localStorage.setItem('timerStartTime', timerStartTime.toString());
      setRemainingTime(timerDuration);
    };

    const startTimer = () => {
      setIsTimerEnded(false);
      const elapsedTime = currentTime - parseInt(timerStartTime);
      const initialRemainingTime = timerDuration - elapsedTime;

      if (initialRemainingTime > 0) {
        setRemainingTime(initialRemainingTime);

        const timer = setInterval(() => {
          setRemainingTime((prevRemainingTime) => {
            if (prevRemainingTime <= 1000) {
              // Timer finished
              clearInterval(timer);
              handleTimeout(); // Call handleTimeout function
              return 0;
            }
            return prevRemainingTime - 1000;
          });
        }, 1000);

        return () => {
          clearInterval(timer); // Clean up the timer when the component unmounts
        };
      } else {
        // Timer has already finished or not started yet
        handleTimeout();
      }
    };

    if (timerStartTime) {
      startTimer();
    } else {
      // Timer has not been started yet
      const timerStartTime = currentTime;
      localStorage.setItem('timerStartTime', timerStartTime.toString());
      startTimer();
    }
  },[]); 

  // Format the remaining time into hours, minutes, and seconds
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='container'>
      <img src="/icons/lottery.png" alt="icon" className="icon" />
      <div className="timer-component">
        {isTimerEnded && <ConfettiEffect />}
        <div className='icon-container'>{isTimerEnded && <img src="/icons/money.png" alt="icon" />} </div> 
        <div className="timer-label">Time remaining to draw</div>
        <div className="timer">{formatTime(remainingTime)}</div>
      </div>
    </div>
    
  );
}

export default Timer;
