import React, { useState, useRef } from "react";
import TimeSlider from "react-input-slider";

import "./App.scss";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";

const Audio = () => {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="player flex my-auto mx-auto" >
      <div className="Control-Button-Group">
        <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
          {isPlay ? <PauseIcon /> : <PlayIcon />}
        </div>
      </div>
      <TimeSlider
        axis="x"
        xmax={duration}
        x={currentTime}
        onChange={handleTimeSliderChange}
        styles={{
          track: {
            backgroundColor: "#e3e3e3",
            height: "5px",
            width:"100%"
          },
          active: {
            backgroundColor: "#333",
            height: "5px",
          },
          thumb: {
            marginTop: "-3px",
            width: "8px",
            height: "8px",
            backgroundColor: "#333",
            borderRadius: 10,
          },
        }}
      />
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
      <div className="flex w-[20%] gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-mic ml-2"
        >
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
        <select name="cars" id="cars" className="bg-[#817e7e] rounded-none">
            <option value="Mic 1">Mic 1</option>
            <option value="Mic 2">Mic 2</option>
            <option value="Mic 3">Mic 3</option>
            <option value="Mic 4">Mic 4</option>
          </select>
      </div>
    </div>
  );
};

export default Audio;
