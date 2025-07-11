
import React from 'react';
import type { Lesson } from '../types';
import { CheckCircleIcon, LockClosedIcon, PlayCircleIcon } from './icons';

interface ProgressTrackerProps {
  lessons: Lesson[];
  currentLessonId: number;
  completedLessons: Set<number>;
  onSelectLesson: (index: number) => void;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ lessons, currentLessonId, completedLessons, onSelectLesson }) => {
  return (
    <div className="bg-white p-2 sm:p-4 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-3 text-center">ההתקדמות שלך</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {lessons.map((lesson, index) => {
          const isCompleted = completedLessons.has(lesson.id);
          const isCurrent = lesson.id === currentLessonId;
          
          let statusClasses = 'bg-slate-200 text-slate-500';
          let Icon = <LockClosedIcon className="h-4 w-4" />;
          if (isCurrent) {
            statusClasses = 'bg-blue-500 text-white shadow-md scale-105 sm:scale-110';
            Icon = <PlayCircleIcon className="h-4 w-4" />;
          } else if (isCompleted) {
            statusClasses = 'bg-green-500 text-white';
            Icon = <CheckCircleIcon className="h-4 w-4" />;
          }
          
          return (
            <button 
              key={lesson.id}
              onClick={() => onSelectLesson(index)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 transform ${statusClasses}`}
            >
              {Icon}
              <span>שיעור {lesson.id}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
