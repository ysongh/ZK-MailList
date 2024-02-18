import React, { useState } from 'react';

const EmailForm = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sending emails to:', emails);
    console.log('Message:', message);
    setEmails('');
    setMessage('');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold mb-4">Send Multiple Emails</h1>
        <label htmlFor="emails" className="block text-sm font-medium text-gray-700">Title:</label>
        <textarea
          id="text"
          className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows="3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">Message:</label>
        <textarea
          id="message"
          className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Emails
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
