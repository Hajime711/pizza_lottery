import React, { useState } from 'react';
import './SignIn.css'; 
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    var accountName = document.getElementById("username").value;
      try {
        window.hive_keychain.requestSignBuffer(accountName,'Sign in to Pizza Lottery','posting',(response) => {
        if (response.success) {
          console.log('Sign-in successful!');
          console.log('logged in');
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
          // Reset form fields
          setUsername('');
          history.push('/');//redirect to homepage
        }
        else{
          console.log(response);
          alert('Username does not exist, Sign up on Hive!');
        }
           
      });
      } catch (error) {
        console.error('Error signing in:', error);
      }
  };

  return (
    <div className="sign-in">

      <div className="logo-container">
        <img src="/icons/crypto.png" alt="Logo" className="logo" />
      </div>

      <div className="form-container">
        <h2>Hive Sign In</h2>

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
          <button type="submit" className="submit-btn">Sign In</button>
        </form>
        
      </div>
      </div>
  );
};

export default SignIn;
