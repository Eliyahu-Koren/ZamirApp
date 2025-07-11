
import React from 'react';
import type { VocabularyActivity } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { SpeakerWaveIcon } from './icons';

interface VocabularyCardProps {
  activity: VocabularyActivity;
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({ activity }) => {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden text-center">
      <img src={activity.imageUrl} alt={activity.word} className="w-full h-56 object-cover" />
      <div className="p-6">
        <p className="text-sm font-semibold text-purple-600">{activity.category}</p>
        <p className="text-4xl sm:text-5xl font-bold my-2 text-slate-800 ltr">{activity.word}</p>
        <p className="text-xl sm:text-2xl text-slate-500">{activity.translation}</p>
        <button 
          onClick={() => speak({ text: activity.word })}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
          aria-label={`השמע את המילה ${activity.word}`}
        >
          <SpeakerWaveIcon className="h-5 w-5" />
          <span>שמעי איך אומרים</span>
        </button>
      </div>
    </div>
  );
};
