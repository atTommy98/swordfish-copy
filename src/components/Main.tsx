import { useState, useEffect } from "react";

import video1 from "../videos/arial-1-sphere.mp4";

import ThreeCanvas from "../components/ThreeCanvas";
// Modals
import Modal1 from "../modals/Modal1";

export default function Main() {
  const [activeVideo, setActiveVideo] = useState(video1);
  const [count, setCount] = useState<number>(0);
  const [videoPaused, setVideoPaused] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<number>()

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

  function logVideoTime() {
    const videoTime = Math.ceil(video.currentTime);
    if (!video.paused) {
      setCount(count + 1);
    }
    if (count === 0) {
      video.pause();
      setVideoPaused(true);
      setActiveModal(1);
    }
    console.log(videoTime);
  }

  function continueVideo() {
    video.play();
    setVideoPaused(false);
    setActiveModal(0)
  }
  // App
  useEffect(() => {
    const tick = setInterval(() => {
      logVideoTime();
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  });

  return (
    <>
      <ThreeCanvas video={video} />
      {activeModal === 1 && <Modal1 continueVideo={continueVideo} />}
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
    </>
  );
}
