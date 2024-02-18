import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [mails, setMails] = useState([
    {
      id: 1,
      subject: "Meeting Reminder",
      date: "2024-02-06",
      body: "Don't forget our meeting tomorrow at 10 AM."
    },
    {
      id: 2,
      subject: "Weekly Newsletter",
      date: "2024-02-05",
      body: "Here are the latest updates from our company."
    },
    // Add more mail objects as needed
  ]);

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Email Dashboard</h1>
      <div className="mt-4 mb-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Copy Link to Subscribe
        </button>
        <button
          className="ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => navigate("/emailform")}
        >
          Send Email
        </button>
      </div>
      <ul className="space-y-4">
        {mails.map((mail) => (
          <li key={mail.id} className="bg-white p-4 shadow-md rounded-md">
            <div>
              <h2 className="text-lg font-semibold">{mail.subject}</h2>
              <p className="text-gray-600">Date: {mail.date}</p>
              <p className="mt-2">{mail.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
