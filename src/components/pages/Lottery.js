import React, { useEffect, useState } from 'react';
import '../../App.css';
import Grid from '../Grid';
import TicketContainer from '../TicketContainer';
import Timer from '../Timer';
import axios from 'axios';

function Lottery() {
  const [bookedBoxes, setBookedBoxes] = useState([]);
  const [jsonData, setJsonObj] = useState({});
  const [stats, setStats] = useState({});

  const fetchJsonData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/json');
      if(response){
        const jsonData = response.data[response.data.length-1].data;
        setJsonObj(jsonData);
      }
      if (Object.keys(jsonData).length === 0 && jsonData.constructor === Object) {
        console.log('jsonData is empty');
      } else {
        const boxes = [].concat(...Object.values(jsonData));
        console.log(boxes);
        setBookedBoxes(boxes);
      }
      setJsonObj(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJsonData();
  }, []);

  useEffect(() => {
    const count = bookedBoxes.length;
    // Set the stats accordingly
    const newStats = {
      availableTickets: 25 - count,
      totalTicketsSold: count,
      revenue: 0.01 * count,
      booked: bookedBoxes,
      json_obj: jsonData
    };
    setStats(newStats);
  }, [bookedBoxes, jsonData]);

  return (
    <>
      <Timer />
      <div className='lottery'>
        <Grid bookedBoxes={bookedBoxes} />
        <TicketContainer stats={stats} />
      </div>
    </>
  );
}

export default Lottery;
