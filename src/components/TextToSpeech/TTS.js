import React, { useState } from "react";
import { useSpeech } from "react-text-to-speech";

export default function App({ content }) {
  const [voice, setVoice] = useState("Aaron");
  const [pitch, setPitch] = useState(1.1);
  const [rate, setRate] = useState(1.2);
  const [volume, setVolume] = useState(1);

  const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    // setVoice(voices.find((v) => v.name === event.target.value));
    setVoice(event.target.value);
  };

  console.log("check voice", voice);

  const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };
  const { Text, speechStatus, start, pause, stop } = useSpeech({
    text: (
      <div className="text-lg text-white pt-8">
        <p className="text-3xl text-white">{content}</p>
      </div>
    ),
    highlightText: true,
    highlightProps: { style: { color: "white", backgroundColor: "blue" } },
    voiceURI: voice,
    volume: volume,
    rate: rate,
    pitch: pitch,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      <div className="flex gap-2 justify-center items-center">
        <label className="text-white">
          Pitch:
          <input
            type="range"
            min="0.0"
            max="3"
            step="0.1"
            value={pitch}
            onChange={handlePitchChange}
          />
        </label>

        <br />

        <label className="text-white">
          Speed:
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={handleRateChange}
          />
        </label>
        <br />
        <label className="text-white">
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>

        <br />

        <label className="text-white flex items-center gap-2">
          Voice:
          <select
            value={voice?.name}
            onChange={handleVoiceChange}
            className="text-white bg-[#138e00]"
          >
            {window.speechSynthesis.getVoices().map((voice) => {
              if (
                voice.name === "Aaron" ||
                voice.name === "Arthur" ||
                voice.name === "Catherine" ||
                voice.name === "Daniel (Tiếng Anh (Vương quốc Anh))" ||
                voice.name === "Fred" ||
                voice.name === "Gordon" ||
                voice.name === "Karen" ||
                voice.name === "Martha" ||
                voice.name === "Melina" ||
                voice.name === "Moira" ||
                voice.name === "Nicky" ||
                voice.name === "Tessa"
              ) {
                return (
                  <option key={voice.name} value={voice.name}>
                    {voice.name}
                  </option>
                );
              }
            })}
          </select>
        </label>
        <br />
        {speechStatus !== "started" ? (
          <button
            className="text-white bg-[#138e00] p-2 rounded-lg "
            onClick={start}
          >
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
              class="lucide lucide-play"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
        ) : (
          <button
            className="text-white bg-[#138e00] p-2 rounded-lg "
            onClick={pause}
          >
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
              class="lucide lucide-pause"
            >
              <rect width="4" height="16" x="6" y="4" />
              <rect width="4" height="16" x="14" y="4" />
            </svg>
          </button>
        )}
        <button
          className="text-white bg-[#138e00] p-2 rounded-lg "
          onClick={stop}
        >
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
            class="lucide lucide-stop-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <rect width="6" height="6" x="9" y="9" />
          </svg>
        </button>
      </div>
      <Text />
    </div>
  );
}
