import React, { useState } from "react";

// Import components
import SpotifySDK from "./SpotifySDK";
import SpotifyAuthWindow from "./SpotifyAuthWindow";

// Import hooks
import useSpotifyControls from "../../hooks/useSpotifyControls";

export default function SpotifyPlayer(props) {
  const [accessStatus, setAccessStatus] = useState();
  const [accessToken, setAccessToken] = useState();
  const [statusMessage, setStatusMessage] = useState();
  const [deviceId, setDeviceId] = useState();
  const [spotifyPlayer, setSpotifyPlayer] = useState();
  const [
    startPlayback,
    resumePlayback,
    pauseTrack,
    nextSong,
    currentlyPlaying,
  ] = useSpotifyControls(accessToken, deviceId);

  const [playbackPaused, setPlaybackPaused] = useState(false);

  return (
    <div>
      <h3>Spotify</h3>
      {!accessToken && (
        <SpotifyAuthWindow
          setStatus={setAccessStatus}
          setToken={setAccessToken}
          setMessage={setStatusMessage}
        />
      )}
      {accessToken && (
        <SpotifySDK
          accessToken={accessToken}
          setStatus={setAccessStatus}
          setMessage={setStatusMessage}
          setDeviceId={setDeviceId}
          setSpotifyPlayer={setSpotifyPlayer}
        />
      )}
      <p>{statusMessage}</p>
      <div>
        {/* Refactor these buttons into the parent MusicPlayer component */}
        <div
          onClick={() => {
            if (playbackPaused) {
              resumePlayback(spotifyPlayer);
              setPlaybackPaused(false);
            }
          }}
        >
          <h4>Play</h4>
        </div>
        <div
          onClick={() => {
            if (!playbackPaused) {
              pauseTrack(spotifyPlayer);
              setPlaybackPaused(true);
            }
          }}
        >
          <h4>Pause</h4>
        </div>
        <div
          onClick={() => {
            nextSong(spotifyPlayer);
          }}
        >
          <h4>Next</h4>
        </div>
        <div
          onClick={() => {
            console.log(currentlyPlaying(spotifyPlayer));
          }}
        >
          <h4>nowPlaying</h4>
        </div>
      </div>
    </div>
  );
}

//   return (
//     <iframe
//       title="Spotify Player"
//       src="https://open.spotify.com/embed/playlist/3PPbbsJhktmX5Cp6syx7gR"
//       width="300"
//       height="220"
//       frameborder="0"
//       allowtransparency="true"
//       allow="encrypted-media"
//     ></iframe>
//   );
// }
