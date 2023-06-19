import React, { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {
  const [remainingTime, setRemainingTime] = useState(0);
  const timerDuration = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

  useEffect(() => {
    const timerStartTime = localStorage.getItem('timerStartTime');
    const currentTime = Date.now();

    if (timerStartTime) {
      const elapsedTime = currentTime - timerStartTime;
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
        // Timer has already finished
        console.log('Timer already finished!');
        setRemainingTime(0);
      }
    } else {
      // Timer has not been started yet
      const timerStartTime = currentTime;
      localStorage.setItem('timerStartTime', timerStartTime);
    }
  }, []);

  const handleTimeout = () => {
    // check if all grid boxes are booked
    //randomize the booked boxes
    //send the pool prize to the user
    //optional: display a woohoo message
    //clear the stats
    console.log('Timer finished!');
    // Reset the timer by updating the timer start time
    const timerStartTime = Date.now();
    localStorage.setItem('timerStartTime', timerStartTime);
    setRemainingTime(timerDuration);
  };

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
    <div className="timer-component">
      <div className="timer-label">Time remaining to draw</div>
      <div className="timer">{formatTime(remainingTime)}</div>
    </div>
  );
}

export default Timer;
