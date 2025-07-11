
import React from 'react';
import type { PhonicsActivity } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { SpeakerWaveIcon } from './icons';

interface PhonicsCardProps {
  activity: PhonicsActivity;
}

export const PhonicsCard: React.FC<PhonicsCardProps> = ({ activity }) => {
  const { speak } = useSpeechSynthesis();

  const handleSpeak = () => {
    speak([
      { text: `The letter ${activity.letter}. It makes a ${activity.sound} sound.`, lang: 'en-US' },
      { text: activity.hebrew_example, lang: 'he-IL' }
    ]);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-blue-50 rounded-xl shadow-lg p-6 sm:p-8 text-center flex flex-col items-center">
      <h3 className="text-xl text-blue-800 font-bold mb-2">לימוד אותיות וצלילים</h3>
      <div className="text-8xl sm:text-9xl font-bold text-blue-600 ltr">{activity.letter}</div>
      <p className="text-2xl sm:text-3xl font-semibold text-blue-900 mt-4 ltr">"{activity.sound}"</p>
      <p className="text-slate-600 mt-4 text-lg">{activity.hebrew_example}</p>
      <button 
        onClick={handleSpeak}
        className="mt-6 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        aria-label="השמע צליל והסבר"
      >
        <SpeakerWaveIcon className="h-6 w-6" />
        <span>השמיעי לי</span>
      </button>
    </div>
  );
};
