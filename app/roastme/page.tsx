'use client';
import React, { useState } from 'react';

interface UserInfo {
  name: string;
  age: number;
  jobTitle: string;
}

const RoastMe: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    age: 0,
    jobTitle: '',
  });
  const [roast, setRoast] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: name === 'age' ? parseInt(value) || 0 : value });
  };

  const generateRoast = () => {
    const roasts = [
      `${userInfo.name}, ${userInfo.age}, and still a ${userInfo.jobTitle}? I've seen more career progression in a hamster wheel.`,
      `Oh look, it's ${userInfo.name}, the ${userInfo.age}-year-old who thinks being a ${userInfo.jobTitle} is a personality trait.`,
      `${userInfo.name}, you're ${userInfo.age} and a ${userInfo.jobTitle}? I bet your parents are really proud... of their other children.`,
      `At ${userInfo.age}, most people have accomplished something. But hey, ${userInfo.name}, being a ${userInfo.jobTitle} is... something, I guess?`,
      `${userInfo.name}, the ${userInfo.jobTitle} who's been ${userInfo.age} years in the making. Proof that quantity doesn't equal quality.`,
    ];
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    setRoast(randomRoast);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100">

        <div className="w-full bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold text-center">SUMMA00</h1>
        </div>

      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg mt-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">Roast Me</h1>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={userInfo.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            name="age"
            placeholder="Your Age"
            value={userInfo.age || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Your Job Title"
            value={userInfo.jobTitle}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={generateRoast}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Roast Me
          </button>
        </div>
        {roast && (
          <div className="mt-6 p-4 bg-indigo-100 rounded-md">
            <p className="text-indigo-800 font-medium">{roast}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoastMe;