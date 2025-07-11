
import React, { useState, useEffect } from 'react';
import type { PronunciationActivity } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { SpeakerWaveIcon, MicrophoneIcon, CheckCircleIcon, XCircleIcon } from './icons';

interface PronunciationPracticeProps {
  activity: PronunciationActivity;
}

export const PronunciationPractice: React.FC<PronunciationPracticeProps> = ({ activity }) => {
  const { phrase, translation } = activity;
  const { speak } = useSpeechSynthesis();
  const { transcript, isListening, startListening, stopListening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [lastTranscript, setLastTranscript] = useState('');

  useEffect(() => {
    if (!isListening && transcript) {
      const cleanTranscript = transcript.trim().toLowerCase().replace(/[.,?!]/g, '');
      const cleanPhrase = phrase.trim().toLowerCase().replace(/[.,?!]/g, '');
      
      setLastTranscript(transcript);

      if (cleanTranscript === cleanPhrase) {
        setFeedback('correct');
      } else {
        setFeedback('incorrect');
      }
    }
  }, [transcript, isListening, phrase]);

  const handleMicClick = () => {
    setFeedback('idle');
    setLastTranscript('');
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };
  
  if (!browserSupportsSpeechRecognition) {
      return (
        <div className="text-center p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <p className="font-bold">תכונה לא נתמכת</p>
            <p>הדפדפן שלך לא תומך בזיהוי דיבור. נסי להשתמש בכרום (Chrome).</p>
        </div>
      )
  }

  return (
    <div className="w-full max-w-lg mx-auto text-center p-6 bg-slate-50 rounded-xl">
      <h3 className="text-xl text-slate-800 font-bold mb-2">תרגול הגייה</h3>
      <p className="text-slate-500 mb-6">הקשיבי, ואז לחצי על המיקרופון וחזרי על המשפט. בלי לחץ!</p>

      <div className="bg-white p-6 rounded-lg shadow-inner">
        <p className="text-3xl sm:text-4xl font-bold text-slate-800 ltr">{phrase}</p>
        <p className="text-lg sm:text-xl text-slate-500 mt-2">{translation}</p>
      </div>

      <div className="flex justify-center items-center gap-4 my-8">
        <button
          onClick={() => speak({ text: phrase })}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          aria-label="הקשב למשפט"
        >
          <SpeakerWaveIcon className="h-6 w-6" />
          <span>הקשיבי</span>
        </button>
        <button
          onClick={handleMicClick}
          className={`relative p-5 rounded-full transition-all duration-300 ${
            isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-green-500 text-white'
          }`}
          aria-label="התחל או עצר הקלטה"
        >
          <MicrophoneIcon className="h-8 w-8" />
        </button>
      </div>
      
      <div className="h-16 mt-4">
        {isListening && <p className="text-blue-600 font-semibold">מקשיבה... קחי את הזמן.</p>}
        {feedback === 'correct' && (
          <div className="flex flex-col items-center text-green-600">
            <CheckCircleIcon className="h-8 w-8" />
            <p className="font-bold mt-1">וואו, שני! הגייה מושלמת! 🤩</p>
          </div>
        )}
        {feedback === 'incorrect' && (
          <div className="flex flex-col items-center text-red-600">
            <XCircleIcon className="h-8 w-8" />
            <p className="font-bold mt-1">אוי, זה לא היה בדיוק זה. לא נורא בכלל!</p>
            <p className="text-sm text-slate-500">בואי ננסה שוב. אמרת: "{lastTranscript}"</p>
          </div>
        )}
      </div>
    </div>
  );
};
