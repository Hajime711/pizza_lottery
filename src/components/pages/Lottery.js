import React from 'react';
import '../../App.css';
import Grid from '../Grid'
import TicketContainer from '../TicketContainer';

function Lottery() {
  return (
    <>
    <div className='lottery'>
      <Grid />
      <TicketContainer />
    </div>
    </>
  );
}


export default Lottery;