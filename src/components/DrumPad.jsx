import React, { useRef, useEffect } from "react";

function DrumPad({ id, sound, url, handleClick, volume }) {
  const audioRef = useRef(null);

  // Ensure audio element volume is set when component mounts or volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      handleClick(sound);
    }
  };

  return (
    <div className="container">
      <div className="drum-pad" id={id} onClick={playSound}>
        {id}
        <audio className="clip" ref={audioRef} src={url} preload="auto"></audio>
      </div>
    </div>
  );
}

export default DrumPad;
