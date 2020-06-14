import React, { useState } from "react";

// Import components
import { SpotifyPlayer, SpotifyIframe } from "./Spotify";

// Import hooks
import useTone from "../../hooks/useTone";

export default function MusicPlayer(props) {
  const { gameMode } = props;
  const [playMusic, setPlayMusic] = useState(false);
  const [spotifyMusicOn, setSpotifyMusicOn] = useState(false);
  // const [tonePlayer, startTone, stopTone] = useTone;

  return (
    <>
      {playMusic && spotifyMusicOn && <SpotifyPlayer />}
      {/* {playMusic && !spotifyMusicOn && (
        <h1>{tonePlayer.loaded ? "Using Tone.js!" : "Buffering..."}</h1>
      )} */}
      {playMusic && !spotifyMusicOn && (
        <h4 onClick={() => setSpotifyMusicOn(true)}>Spotify login</h4>
      )}
      {/* <h4>{playMusic || !gameMode ? "Spotify" : <SpotifyIframe />}</h4> */}
      <h4 onClick={() => setPlayMusic((prev) => !prev)}>
        music:{playMusic ? "on" : "off"}
      </h4>
    </>
  );
}
