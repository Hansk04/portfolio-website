import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Walkman.scss";

import Vinyl from "../../assets/images/vinyl.svg?react";
import TonearmOff from "../../assets/images/tonearmOff.svg?react";
import TonearmOn from "../../assets/images/tonearmOn.svg?react";
import pianoAudioSrc from "../../assets/audio/mainmusic.mp3";

interface AudioElementWithPromise extends HTMLAudioElement {
  playPromise?: Promise<void>;
}

const Walkman: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<AudioElementWithPromise>(null);

  const toggleAudio = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.playPromise = audioRef.current.play();
        await audioRef.current.playPromise;
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Audio playback error:", error);
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const onAudioEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);
  

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const audioSrc = "/assets/mainmusic.mp3";

  return (
    <div className="walkman" role="region" aria-label="Audio player">
      <button
        className="walkman__button"
        onClick={toggleAudio}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        type="button"
      >
        <div className={`walkman__vinyl ${isPlaying ? "spin" : ""}`}>
          <Vinyl aria-hidden="true" />
        </div>

        {isPlaying ? (
          <TonearmOn className="walkman__tonearm" aria-hidden="true" />
        ) : (
          <TonearmOff className="walkman__tonearm" aria-hidden="true" />
        )}
      </button>

      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={onAudioEnded}
        preload="metadata"
        aria-hidden="true"
      />
    </div>
  );
};

export default Walkman;