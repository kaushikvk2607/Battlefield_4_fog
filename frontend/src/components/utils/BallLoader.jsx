import React from 'react';

const BallLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
      <p className="mt-4 text-center text-lg">
        The backend is hosted on a free service (<strong>Render</strong>), so it might take a few moments to load data.  
        Meanwhile, you can watch the ball bounce! 🎾
      </p>
    </div>
  );
};

export default BallLoader;
