import './TicketContainer.css'
import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { retrieveFromDB, uploadToDB } from './Database';
import { buyTicket } from './Transaction';

Modal.setAppElement('#root'); // Set the root element for accessibility

function TicketContainer() {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState('');
    const [row, setRow] = useState('');
    const [column, setColumn] = useState('');
    const [totalTicketsSold,setSold] = useState(0);
    const [availableTickets,setAvailable] = useState(25);
    const [revenue,setRevenue] = useState(0.0);

    useEffect(() => {
        const loadData = async() => {
            var bookedBoxes = [];
            var jsonData = await retrieveFromDB();
            if (Object.keys(jsonData).length === 0 && jsonData.constructor === Object) {
                console.log('empty json');
            } else {
                bookedBoxes = [].concat(...Object.values(jsonData));
            }
                
            //edit the stats accordingly
            setSold(bookedBoxes.length);
            setAvailable(25 - bookedBoxes.length);
            setRevenue(0.01 * bookedBoxes.length); 
        }
        loadData();
      }, [totalTicketsSold]);

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setError('');
    };
    const handleBuy = () => {
        // Handle the logic for buying ticket
        const button = document.getElementById('signin_btn');
        if(button.disabled){//user signed in so show modal and perform transactions
            console.log('BUYING TICKETS');
            openModal();
        }
        else{
            alert('You need to Sign in to your Hive Wallet to buy tickets')
            history.push('/sign-in');//redirect to sign in page
        }
    };
    const BuyTickets = async() => {
        const cellid = parseInt(`${row}${column}`);
        const button = document.getElementById('signin_btn');
        var bookedBoxes = [];
        var booked = [];
        var jsonData = await retrieveFromDB();
        if (Object.keys(jsonData).length === 0 && jsonData.constructor === Object) {
            console.log('empty json');
        } else {
            bookedBoxes = [].concat(...Object.values(jsonData));
        }
        const username = button.innerText.toLowerCase();
        if(row>5 || column>5 ||row<0 ||column<0){
            alert('Invalid row or column number entered, enter from 5X5 GRID given')
        }
        //check if this user already exists, and add to their selected boxes
        else if(bookedBoxes.includes(cellid)){
            alert('This ticket is already booked!');
        }
        else{
            if(jsonData.hasOwnProperty(username)){//username already exists
                booked = jsonData[username];
                booked.push(cellid);
                bookedBoxes.push(cellid);
                jsonData[username] = booked;
                console.log('booked1:',booked);
            }
            else{//user doesnt exist already
                booked.push(cellid);
                bookedBoxes.push(cellid);
                jsonData[username] = booked;
                console.log('booked2:',booked);
            } 
            const response = await buyTicket(username);
            if(response === true){
                const respo = uploadToDB(jsonData);
                console.log(respo);
                //edit the stats accordingly
                setSold(bookedBoxes.length);
                setAvailable(25 - bookedBoxes.length);
                setRevenue(0.01 * bookedBoxes.length); 
                //change the color of booked box to black
                const gridCell = document.getElementById(cellid);
                if (gridCell) {
                    gridCell.style.backgroundColor = "#000"; // Replace "your-color" with the desired background color
                }
            }   
        }
        closeModal();
    }
    return (
    <div className="form-container">
        <div className='stats'>
        <h2>Available Tickets: {availableTickets}</h2>
        <h2>Total Tickets Sold: {totalTicketsSold}</h2>
        <h2>Revenue: {revenue} PIZZA</h2>
        </div>
        <button className="button" onClick={handleBuy}>Buy Tickets</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ticket Purchase Modal"
        className="ticket-modal"
        >
        <h2>Buy Tickets</h2>
        <form onSubmit={handleBuy}>
            <div>
            <label>Quantity:1</label>
            <label>1 ticket is 0.01 PIZZA</label>
            </div>
            <div>
                <label>Ticket:</label>
                <input
                type="text"
                name="row"
                placeholder="Row"
                onChange={(e) => setRow(e.target.value)}
                />
                <input
                type="text"
                name="column"
                placeholder="Column"
                onChange={(e) => setColumn(e.target.value)}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="button-container">
            <button type="button" onClick={BuyTickets}>Buy</button>
            <button type="button" onClick={closeModal}>Close</button>
            </div>
            </form>
        </Modal>
        </div>
    );
}

export default TicketContainer;
