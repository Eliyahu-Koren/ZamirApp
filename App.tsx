
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { LessonView } from './components/LessonView';
import { ProgressTracker } from './components/ProgressTracker';
import { lessons } from './services/lessonData';
import type { Lesson } from './types';

const App: React.FC = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const userName = "שני"; // Personalization for Shani

  const currentLesson = useMemo((): Lesson => lessons[currentLessonIndex], [currentLessonIndex]);

  const handleCompleteLesson = () => {
    setCompletedLessons(prev => new Set(prev).add(currentLesson.id));
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      alert(`כל הכבוד, שני! סיימת את כל השיעורים! אני כל כך גאה בך! את לגמרי מוכנה לכבוש את תאילנד ויפן! ✈️🌏 תעשי חיים, מגיע לך!`);
    }
  };
  
  const selectLesson = (index: number) => {
    setCurrentLessonIndex(index);
  };

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800">
      <Header userName={userName} />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <ProgressTracker 
          lessons={lessons} 
          currentLessonId={currentLesson.id} 
          completedLessons={completedLessons}
          onSelectLesson={selectLesson}
        />
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <LessonView 
            key={currentLesson.id} 
            lesson={currentLesson} 
            onComplete={handleCompleteLesson}
          />
        </div>
      </main>
      <footer className="text-center p-4 text-slate-500 text-sm">
        <p>נבנה במיוחד בשבילך, שני. מאמינה בך שתהיי אלופה בטיול! ❤️</p>
      </footer>
    </div>
  );
};

export default App;
