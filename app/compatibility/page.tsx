"use client";
import React, { useState } from 'react';
import Link from "next/link";

const Page: React.FC = () => {
  const [name, setName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [dob, setDob] = useState('');
  const [partnerDob, setPartnerDob] = useState('');
  const [matchResult, setMatchResult] = useState<string | null>(null);
  const [showFunnyText, setShowFunnyText] = useState(false);

  const determineMatch = () => {
    const matchScore = Math.random(); 

    if (matchScore > 0.5) {
      setMatchResult(`Congratulations, ${name} and ${partnerName}! You are a perfect match.`);
    } else {
      setMatchResult(`Uh-oh, ${name} and ${partnerName}! You may face challenges.`);
    }

    setShowFunnyText(true); 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    determineMatch();
  };

  const funnyTexts = [
    "You two are so compatible, it's almost scary!",
    "If you weren't so perfect together, I'd say something's wrong.",
    "Don't worry, even though you're a perfect match, just remember opposites attract!",
  ];

  const funnyTips = [
    "Try dancing together under the moonlight—it's scientifically proven to increase compatibility!",
    "Take up a new hobby together—shared interests build stronger bonds!",
    "Remember, communication is key—tell them how much you appreciate their quirks!",
  ];

  const getRandomFunnyText = () => {
    return funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
  };

  const getRandomFunnyTip = () => {
    return funnyTips[Math.floor(Math.random() * funnyTips.length)];
  };

  const handleBack = () => {
    setMatchResult(null);
    setShowFunnyText(false);
    setName('');
    setPartnerName('');
    setDob('');
    setPartnerDob('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100">
      {/* Header */}
      <div className="w-full bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-center">SUMMA00</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Are You a Perfect Match?</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="partnerName" className="block text-sm font-medium text-gray-700">Partner&apos;s Name:</label>
            <input
              id="partnerName"
              type="text"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Your Date of Birth:</label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="partnerDob" className="block text-sm font-medium text-gray-700">Partner&apos;s Date of Birth:</label>
            <input
              id="partnerDob"
              type="date"
              value={partnerDob}
              onChange={(e) => setPartnerDob(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Check Compatibility
          </button>
        </form>

        {/* Match Result and Funny Texts */}
        {matchResult && showFunnyText && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Match Result</h3>
            <p className="text-gray-800">{matchResult}</p>
            <p className="text-gray-600 mt-2">{getRandomFunnyText()}</p>

            <div
                className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
            <Link 
              href="/"
            >
              Back
            </Link>
            </div>
          </div>
        )}

        {/* Waiting for Results */}
        {!matchResult && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Waiting for Results...</h3>
            <p className="text-gray-600 mt-2">{getRandomFunnyTip()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
