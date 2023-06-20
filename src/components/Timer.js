import React, { useEffect, useState } from 'react';
import './Timer.css';
import ConfettiEffect from './ConfettiEffect';

function Timer({stats}) {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isTimerEnded, setIsTimerEnded] = useState(false);

  useEffect(() => {
    //6*60
    const timerDuration = 5 * 60000; // 6 hours in milliseconds
    const timerStartTime = localStorage.getItem('timerStartTime');
    const currentTime = Date.now();

    const handleTimeout = () => {
      //choose a random from the booked boxes
      const randomIndex = Math.floor(Math.random() * stats.booked.length);
      const randomNumber = stats.booked[randomIndex];
      console.log('Random Number:', randomNumber);
      //find which user the number belongs to
      let winner = null;
      for (const username in stats.json_obj) {
        if (stats.json_obj[username].includes(randomNumber)) {
          winner = username;
          break;
        }
      }
      console.log('WINNER IS:');
      console.log(winner);
      console.log("total won:");
      console.log(stats.revenue);
      //send the pool prize to the user
      //transaction code
      //upload json object to blockchain
      const json_obj = {};
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
        <div className='icon-container'>{isTimerEnded && <img src="/icons/winner.png" alt="Image" />} </div> 
        <div className="timer-label">Time remaining to draw</div>
        <div className="timer">{formatTime(remainingTime)}</div>
      </div>
    </div>
    
  );
}

export default Timer;
