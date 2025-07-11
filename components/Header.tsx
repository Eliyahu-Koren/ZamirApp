
import React from 'react';
import { BookOpenIcon } from './icons';

interface HeaderProps {
    userName: string;
}

export const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
            <BookOpenIcon className="h-8 w-8 text-blue-500"/>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">הכנה לטיול באנגלית</h1>
        </div>
        <span className="text-base sm:text-lg text-blue-600 font-semibold">
          בהצלחה, {userName}!
        </span>
      </div>
    </header>
  );
};
