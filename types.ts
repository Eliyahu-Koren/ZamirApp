
export enum ActivityType {
  PHONICS,
  VOCABULARY,
  PRONUNCIATION,
  QUIZ_IMAGE_MATCH,
}

export interface PhonicsActivity {
  type: ActivityType.PHONICS;
  letter: string;
  sound: string;
  hebrew_example: string;
}

export interface VocabularyActivity {
  type: ActivityType.VOCABULARY;
  word: string;
  translation: string;
  category: string;
  imageUrl: string;
}

export interface PronunciationActivity {
  type: ActivityType.PRONUNCIATION;
  phrase: string;
  translation: string;
}

export interface QuizImageMatchActivity {
    type: ActivityType.QUIZ_IMAGE_MATCH;
    word: string;
    options: { imageUrl: string, isCorrect: boolean }[];
}


export type Activity = PhonicsActivity | VocabularyActivity | PronunciationActivity | QuizImageMatchActivity;

export interface Lesson {
  id: number;
  title: string;
  description: string;
  activities: Activity[];
}
