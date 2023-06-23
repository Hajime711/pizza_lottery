import React from 'react';
import '../../App.css';
import Grid from '../Grid';
import TicketContainer from '../TicketContainer';
import Timer from '../Timer';

function Lottery() {
  return (
    <>
      <Timer />
      <div className='lottery'>
        <Grid />
        <TicketContainer />
      </div>
    </>
  );
}

export default Lottery;
