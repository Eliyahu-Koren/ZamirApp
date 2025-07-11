import { useCallback } from 'react';

interface SpeakOptions {
  text: string;
  lang?: string;
  voice?: SpeechSynthesisVoice;
}

interface UseSpeechSynthesisReturn {
  speak: (options: SpeakOptions | SpeakOptions[]) => void;
  getVoices: () => SpeechSynthesisVoice[];
}

export const useSpeechSynthesis = (): UseSpeechSynthesisReturn => {
  const getVoices = useCallback((): SpeechSynthesisVoice[] => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      return [];
    }
    return window.speechSynthesis.getVoices();
  }, []);

  const speak = useCallback((options: SpeakOptions | SpeakOptions[]): void => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn('Speech Synthesis not supported');
      return;
    }

    window.speechSynthesis.cancel(); // Cancel any previous speech

    const optionsArray = Array.isArray(options) ? options : [options];
    if (optionsArray.length === 0) {
      return;
    }

    const allVoices = getVoices();

    const utterances = optionsArray.map(opt => {
      const utterance = new SpeechSynthesisUtterance(opt.text);
      const lang = opt.lang || 'en-US';
      utterance.lang = lang;
      
      // Attempt to find a suitable voice
      if (allVoices.length > 0) {
        let selectedVoice = allVoices.find(voice => voice.lang === lang && voice.name.includes('Google'));
        if (!selectedVoice) {
          selectedVoice = allVoices.find(voice => voice.lang === lang);
        }
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
      }
      return utterance;
    });

    // Chain the utterances to play one after another
    for (let i = 0; i < utterances.length - 1; i++) {
      utterances[i].onend = () => {
        window.speechSynthesis.speak(utterances[i + 1]);
      };
    }
    
    // Start the first utterance
    if (utterances.length > 0) {
      window.speechSynthesis.speak(utterances[0]);
    }
  }, [getVoices]);

  return { speak, getVoices };
};
