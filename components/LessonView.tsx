
import React, { useState } from 'react';
import type { Lesson, Activity } from '../types';
import { ActivityType } from '../types';
import { PhonicsCard } from './PhonicsCard';
import { VocabularyCard } from './VocabularyCard';
import { PronunciationPractice } from './PronunciationPractice';
import { QuizImageMatchCard } from './QuizImageMatchCard';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from './icons';

interface LessonViewProps {
  lesson: Lesson;
  onComplete: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onComplete }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const handleNext = () => {
    if (currentActivityIndex < lesson.activities.length - 1) {
      setCurrentActivityIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentActivityIndex > 0) {
      setCurrentActivityIndex(prev => prev - 1);
    }
  };

  const activity: Activity = lesson.activities[currentActivityIndex];
  const isLastActivity = currentActivityIndex === lesson.activities.length - 1;

  const renderActivity = () => {
    switch (activity.type) {
      case ActivityType.PHONICS:
        return <PhonicsCard activity={activity} />;
      case ActivityType.VOCABULARY:
        return <VocabularyCard activity={activity} />;
      case ActivityType.PRONUNCIATION:
        return <PronunciationPractice activity={activity} />;
      case ActivityType.QUIZ_IMAGE_MATCH:
        return <QuizImageMatchCard activity={activity} onCorrect={() => {}} />;
      default:
        return <div className="text-center p-8">פעילות לא ידועה</div>;
    }
  };

  return (
    <div>
      <div className="mb-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600">{lesson.title}</h2>
        <p className="text-slate-500 mt-2 text-base">{lesson.description}</p>
        <div className="mt-4 text-sm font-bold text-slate-600">
          פעילות {currentActivityIndex + 1} מתוך {lesson.activities.length}
        </div>
      </div>
      
      <div className="my-6 min-h-[350px] flex items-center justify-center">
        {renderActivity()}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrev}
          disabled={currentActivityIndex === 0}
          className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowRightIcon className="h-5 w-5" />
          <span>הקודם</span>
        </button>

        {isLastActivity ? (
          <button
            onClick={onComplete}
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
          >
            <CheckCircleIcon className="h-6 w-6" />
            <span>סיים שיעור</span>
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
          >
            <span>הבא</span>
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

// Dummy component for QuizImageMatchCard to satisfy LessonView
const QuizImageMatchCard: React.FC<{ activity: any, onCorrect: () => void }> = ({ activity, onCorrect }) => {
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
    const [selected, setSelected] = useState<number|null>(null);

    const handleSelect = (index: number, isCorrect: boolean) => {
        setSelected(index);
        if (isCorrect) {
            setFeedback('correct');
            onCorrect();
        } else {
            setFeedback('incorrect');
        }
        setTimeout(() => {
            setFeedback(null);
            setSelected(null);
        }, 1500);
    }
    
    return (
        <div className="text-center w-full">
            <h3 className="text-xl md:text-2xl font-bold mb-2">איזו תמונה מתאימה למילה?</h3>
            <p className="text-3xl sm:text-4xl font-bold text-blue-600 ltr">{activity.word}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {activity.options.map((opt: any, index: number) => (
                    <button 
                        key={index}
                        onClick={() => handleSelect(index, opt.isCorrect)}
                        disabled={feedback !== null}
                        className={`border-4 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                            selected === index && feedback === 'correct' ? 'border-green-500' : 
                            selected === index && feedback === 'incorrect' ? 'border-red-500' : 
                            'border-transparent'
                        }`}
                    >
                        <img src={opt.imageUrl} alt={`option ${index + 1}`} className="w-full h-48 object-cover"/>
                    </button>
                ))}
            </div>
             {feedback === 'correct' && <p className="mt-4 text-green-600 font-bold text-lg sm:text-xl">כל הכבוד!</p>}
             {feedback === 'incorrect' && <p className="mt-4 text-red-600 font-bold text-lg sm:text-xl">נסי שוב!</p>}
        </div>
    );
};
