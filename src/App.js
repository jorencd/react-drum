import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DrumPad from './components/DrumPad';

// Replace with actual drum sounds
const clips = [
  { key: 'Q', sound: 'Kick Drum', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { key: 'W', sound: 'Snare Drum', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { key: 'E', sound: 'Hi-Hat', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { key: 'A', sound: 'Clap', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { key: 'S', sound: 'Open Hi-Hat', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { key: 'D', sound: 'Kick + Hi-Hat', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
  { key: 'Z', sound: 'Closed Hi-Hat', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
  { key: 'X', sound: 'Snare Drum', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { key: 'C', sound: 'Bass Drum', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' }
];

function App() {
  const [displayText, setDisplayText] = useState("");
  const [volume, setVolume] = useState(1);  // State for volume

  const handleClick = (sound) => {
    setDisplayText(sound);
  };

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const drumPad = clips.find(clip => clip.key === key);
    if (drumPad) {
      // Play sound when the key is pressed
      document.getElementById(drumPad.key).click(); // Trigger click event of corresponding drum pad
      setDisplayText(drumPad.sound);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="drum-machine">
      <h1>Drum Machine By Jorence Mendoza</h1>
      <div id="display">{displayText}</div>
      <div className="drum-pads">
        {clips.map((clip) => (
          <DrumPad
            key={clip.key}
            id={clip.key}
            sound={clip.sound}
            url={clip.url}
            handleClick={handleClick}
            volume={volume}
          />
        ))}
      </div>
      <div id="volume-control">
        <label htmlFor="volume">Volume: </label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default App;
