import { useState, useEffect, useRef } from 'react';

// Type definitions for Web Speech API to fix TypeScript errors in environments
// where they are not available by default (e.g., without "dom" lib in tsconfig).

interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
}

interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
}

type SpeechRecognitionErrorCode =
  | "no-speech"
  | "aborted"
  | "audio-capture"
  | "network"
  | "not-allowed"
  | "service-not-allowed"
  | "bad-grammar"
  | "language-not-supported";

interface SpeechRecognitionErrorEvent extends Event {
    readonly error: SpeechRecognitionErrorCode;
    readonly message: string;
}

// This is the interface for the SpeechRecognition instance
interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
    start(): void;
    stop(): void;
}

// This is the interface for the constructor
interface SpeechRecognitionStatic {
    new(): SpeechRecognition;
}

// Extend the window object to include vendor-prefixed and standard versions
declare global {
    interface Window {
        SpeechRecognition: SpeechRecognitionStatic;
        webkitSpeechRecognition: SpeechRecognitionStatic;
    }
}

// --- End of type definitions ---

interface UseSpeechRecognitionReturn {
  transcript: string;
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
  browserSupportsSpeechRecognition: boolean;
}

const SpeechRecognition =
  typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
const browserSupportsSpeechRecognition = !!SpeechRecognition;

export const useSpeechRecognition = (): UseSpeechRecognitionReturn => {
  const recognition = useRef<SpeechRecognition | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (!browserSupportsSpeechRecognition || !SpeechRecognition) {
      return;
    }

    recognition.current = new SpeechRecognition();
    const recognitionInstance = recognition.current;
    
    recognitionInstance.continuous = true;
    recognitionInstance.lang = 'en-US';
    recognitionInstance.interimResults = true;

    recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setTranscript(prev => prev + finalTranscript);
    };
    
    recognitionInstance.onend = () => {
      setIsListening(false);
    };
    
    recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
    }

    return () => {
      recognitionInstance.stop();
    };
  }, []);

  const startListening = () => {
    if (recognition.current && !isListening) {
      setTranscript('');
      recognition.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition.current && isListening) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  };
};
