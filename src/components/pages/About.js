import React from 'react';
import './About.css'; // Assuming you have a separate CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Mini Game</h1>
      <p className="description">
        Welcome to our exciting mini game! We've created a unique algorithm that powers this game, providing you with an immersive and enjoyable experience.
      </p>
      <div className='heading'>Algorithm Overview</div>
      <p>
        Our algorithm is designed to provide dynamic and challenging gameplay. It leverages cutting-edge technology to create a seamless and interactive gaming environment.
      </p>
      <p>
        At its core, the algorithm utilizes artificial intelligence and machine learning techniques to adapt to the player's skill level. It analyzes your gameplay patterns, reaction times, and decision-making strategies to tailor the difficulty level accordingly.
      </p>
      <p>
        Additionally, the algorithm incorporates procedural generation to ensure endless variety. Each game session is unique, offering fresh challenges and surprises every time you play.
      </p>
      <div className='heading'>Join the Fun!</div>
      <p>
        We invite you to dive into the world of our mini game and experience the thrill firsthand. Challenge yourself, compete with friends, and unlock achievements as you master the game powered by our innovative algorithm.
      </p>
      <p>
        Get ready to embark on an unforgettable gaming journey!
      </p>
    </div>
  );
};

export default About;
