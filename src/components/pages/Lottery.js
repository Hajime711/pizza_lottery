import React from 'react';
import '../../App.css';
import Grid from '../Grid'
import TicketContainer from '../TicketContainer';
import Timer from '../Timer'

function Lottery() {
  //retreive booked users json from blockchain
  //check if user is logged in
  //check if user exist in retrieved data, yes: booked boxes = user boxes, no: empty boxes
  //user not logged in then store all booked boxes
  const bookedBoxes = [];
  //check if this user exists
  const user_exist = false;
  //set the stats accordingly
  const stats = {
    availableTickets: 40,
    totalTicketsSold: 10,
    revenue: 500,
    user:user_exist,
    booked: bookedBoxes,
    full_rec: 'jsonobj' 
  };
  return (
    <>
    <div ><Timer /></div>
    <div className='lottery'>
      <Grid bookedBoxes={bookedBoxes}/>
      <TicketContainer stats={stats}/>
    </div>
    </>
  );
}


export default Lottery;