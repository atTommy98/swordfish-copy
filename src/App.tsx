import "./index.css";
import url from "./videos/mountain-pass.mp4";
import { useState, useEffect, useRef } from "react";

// Components
import ThreeCanvas from "./components/ThreeCanvas";
import Accelerometer from "./components/Accelerometer";

function App() {
  const [count, setCount] = useState(0);
  const [activeVideo, setActiveVideo] = useState(url);

  // 360 Video
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.setAttribute("playsinline", "true");
    vid.src = activeVideo;
    vid.crossOrigin = "Anonymous";
    vid.loop = false;
    vid.muted = true;
    vid.play();
    return vid;
  });
  const videoRef = useRef(video);

  // App
  useEffect(() => {
    const tick = setInterval(() => {
      logVideoTime();
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  });

  function logVideoTime() {
    const videoTime = Math.ceil(video.currentTime);
    if (!video.paused) {
      setCount(count + 1);
    }
    if (count === 5) {
      video.pause();
    }
    console.log(videoTime);
  }

  function continueVideo() {
    video.play();
  }

  return (
    <div className="App">
      <ThreeCanvas url={video} />
      <Accelerometer />
      <p
        style={{
          position: "absolute",
          top: "20px",
          left: "10px",
          color: "white",
        }}
      >
        Time Counter: {count}
      </p>
      <button
        onClick={continueVideo}
        style={{ position: "absolute", top: "10px", left: "10px" }}
      >
        Log Duration
      </button>
      {video.paused && (
        <>
          <div className="modal" style={{ right: "500px" }}></div>{" "}
          <div className="modal" style={{ left: "500px" }}></div>
        </>
      )}
    </div>
  );
}

export default App;
