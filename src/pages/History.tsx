import React from 'react';

const History: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Claim History</h1>
        {/* Placeholder for claim history list */}
        <ul className="space-y-4">
          <li className="p-4 border border-gray-200 rounded-lg bg-gray-100">
            <p className="font-semibold">Claim #1</p>
            <p className="text-sm text-gray-600">Submitted on 2025-04-10</p>
          </li>
          <li className="p-4 border border-gray-200 rounded-lg bg-gray-100">
            <p className="font-semibold">Claim #2</p>
            <p className="text-sm text-gray-600">Submitted on 2025-04-08</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default History;
