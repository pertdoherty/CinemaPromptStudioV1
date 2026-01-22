
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold text-white tracking-tight">
        Cinematic Prompt <span className="text-blue-400">Studio</span>
      </h1>
      <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400">
        Craft the perfect AI image prompt. Select your virtual camera gear, composition, and environment to generate a detailed, professional cinematic prompt.
      </p>
    </header>
  );
};
