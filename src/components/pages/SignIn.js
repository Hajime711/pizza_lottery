import React, { useState } from 'react';
import './SignIn.css'; 
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Perform sign-in logic here
    // ...
    var response_holder = false;
    try {
      var accountName = document.getElementById("username").value;
      const keychain = window.hive_keychain;
      keychain.requestCustomJson(null, accountName, 'Posting', JSON.stringify({LoginID:["9292cd44ccaef8b73a607949cc787f1679ede10b-93"],currency:"PIZZA"}), 'Logging in the Pizza Lottery', (response) => {
        //response_holder = response.success;
          if(response.success === true){
            console.log('logged in');
          }
          console.log('NOT LOGGED IN');
          
      });
      }catch (error) {
        console.log('Sign-in error:', error);
      }
      if(response_holder === true){
        //store this username and display on navbar now
        const button = document.getElementById('signin_btn');
        const image = document.createElement('img');
        image.src = '/icons/man.png';
        image.alt = 'Image';
        image.className = 'button-image';
        const text = document.createTextNode(accountName.toUpperCase());
        button.innerHTML = '';
        button.appendChild(image);
        button.appendChild(text);
        button.disabled = true;
        const logoutIcon = document.getElementById('logoutIcon');
        logoutIcon.classList.remove('hidden');
        history.push('/');//redirect to homepage
      } 
      else {
        alert('Login unsuccessful');
      }
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="sign-in">

      <div className="logo-container">
        <img src="/icons/crypto.png" alt="Logo" className="logo" />
      </div>

      <div className="form-container">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Sign In</button>
        </form>
        
      </div>
      </div>
  );
};

export default SignIn;
