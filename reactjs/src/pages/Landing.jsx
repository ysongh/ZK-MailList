import React from 'react';

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to ZK MailList</h1>
        <p className="text-gray-600 mb-6">Streamline your email communication with ease.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
