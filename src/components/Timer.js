import React, { useEffect, useState } from 'react';
import './Timer.css';
import ConfettiEffect from './ConfettiEffect';
import {retrieveFromDB, uploadToDB} from './dboperations'
import {sendToWinner} from './transactions'

function Timer() {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isTimerEnded, setIsTimerEnded] = useState(false);
  useEffect(() => {
    //86400000 24h
    //900000 15 m
    const timerDuration = 86400000; 
    const timerStartTime = localStorage.getItem('timerStartTime');
    const currentTime = Date.now();
    let winner = null;
    const handleTimeout = async() => {
      //get the updated data
      try {
        const jsonobj = await retrieveFromDB();
        if (Object.keys(jsonobj).length === 0 && jsonobj.constructor === Object) {
          console.log('empty json');
        }else {
          const boxes = [].concat(...Object.values(jsonobj));
          //choose a random number from the boxes 
          const randomIndex = Math.floor(Math.random() * boxes.length);
          const randomNumber = boxes[randomIndex];
          console.log('Random Number:', randomNumber);
          //find which user the number belongs to
          for (const username in jsonobj) {
            if (jsonobj[username].includes(randomNumber)) {
              winner = username;
              break;
            }
          }
          console.log('Winner:',winner);
          const amount = 1.000 * parseFloat(boxes.length);
          const fixedAmount = amount.toFixed(3);
          const revenue = fixedAmount.toString();
          console.log("won:",revenue);
          const response = await sendToWinner(winner,revenue);
          if(response === true){
            const message = winner + ' you just won the LOTTERY! You will recieve the POLL PRIZE now!';
            alert(message);
            uploadToDB({});
          } 
          else{
            alert('There is an issue with the transaction, please contact admin to get your prize sent to you');
          }
        }
      } catch (error) {
        console.error(error);
      }
      //Reset the timer by updating the timer start time
      setIsTimerEnded(true);
      const timer = setTimeout(() => {
        setIsTimerEnded(false);
      }, 7000);
      const timerStartTime = Date.now();
      localStorage.setItem('timerStartTime', timerStartTime.toString());
      setRemainingTime(timerDuration);
    };

    const startTimer = () => {
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
