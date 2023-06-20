import React from 'react';
import '../../App.css';
import Grid from '../Grid'
import TicketContainer from '../TicketContainer';
import Timer from '../Timer'

function Lottery() {
  //retreive booked users json from blockchain
  //dummy data
  const jsonobj = {
    hajime:[22,33,44],
    dlmmqb:[31,32],
    spirit:[34,55],
    roma:[42]
  } 
  var bookedBoxes = [];
  bookedBoxes = [].concat(...Object.values(jsonobj));
  const count = bookedBoxes.length;
  console.log(bookedBoxes);
  
  //set the stats accordingly
  const stats = {
    availableTickets: 25 - count,
    totalTicketsSold: count,
    revenue: 0.01*count,
    booked: bookedBoxes,
    json_obj: jsonobj
  };

  return (
    <>
    <div ><Timer stats={stats}/></div>
    <div className='lottery'>
      <Grid bookedBoxes={bookedBoxes}/>
      <TicketContainer stats={stats}/>
    </div>
    </>
  );
}


export default Lottery;