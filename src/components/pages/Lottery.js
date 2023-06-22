import React from 'react';
import '../../App.css';
import Grid from '../Grid'
import TicketContainer from '../TicketContainer';
import Timer from '../Timer'
import { useEffect, useState } from 'react';

function Lottery() {
  //retreive booked users json from blockchain
  var bookedBoxes = [];
  var jsonobj = {
    hajime711:[11,22,33],
    dlmmqb:[44,55]
  };
  var stats = {};
  useEffect(() => {
    retrieveCustomJson();
  }, []);
  const retrieveCustomJson = async () => {
    //retrieve data from hiveblockchain
    // try {
    //   const customJsonId = 'user_data'; 
    //   window.hive_keychain.requestCustomJson('hajime711',customJsonId,'Posting',JSON.stringify({}),'retrieving data',(response) => {
    //     if (response.success && response.result) {
    //       jsonobj = JSON.parse(response.result);
    //       console.log('Retrieved Custom JSON Data:', jsonobj);
    //     } else {
    //       console.error('Error retrieving custom JSON:', response);
    //     }
    //   });
      
    // } catch (error) {
    //   console.error('Error retrieving custom JSON:', error);
    // }
  };
  if (Object.keys(jsonobj).length === 0 && jsonobj.constructor === Object) {
    console.log('jsonobj is empty');
  }
  else{
    bookedBoxes = [].concat(...Object.values(jsonobj));
    console.log(bookedBoxes);  
  }
  const count = bookedBoxes.length;
  //set the stats accordingly
  stats = {
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