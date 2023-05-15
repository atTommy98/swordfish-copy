import { useState, useEffect } from "react";
import ThreeCanvas from "../components/ThreeCanvas";

// 360 Videos
import video1 from "../videos/aerial-1-sphere.mp4";
import video2 from "../videos/aerial-2-sphere.mp4";
import video3 from "../videos/timelapse-sphere.mp4";

// Videos
import videoModal1 from "../videos/aerial-2.mp4";
import videoModal2 from "../videos/EVRENZO EDetail MoA v2 _UK.mp4";
import videoModal3 from "../videos/timelapse-video2-trimmed.mp4";

// Modals
import Modal1 from "../modals/Modal1";
import VideoModal from "../modals/VideoModal";

export default function Main() {
  const [active360Video, setActive360Video] = useState(video1);
  const [active360VideoIndex, setActive360VideoIndex] = useState(0);
  const [count, setCount] = useState<number>(0);
  const [activeModal, setActiveModal] = useState<number | null>();
  const videos = [video1, video2, video3];

  // Initial modal popup
  useEffect(() => {
    video.pause();
    setActiveModal(1);
  }, []);

  // App interval set
  useEffect(() => {
    const tick = setInterval(() => {
      appTick();
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  });

  function pause360Video() {
    video.pause();
    // setVideoPaused(true);
  }

  function continue360Video() {
    video.play();
    setActiveModal(null);
  }

  function next360Video() {
    setActive360VideoIndex(active360VideoIndex + 1);
    setActive360Video(videos[active360VideoIndex + 1]);
    setCount(0);
    if (active360VideoIndex === 2) {
      // Do something at the end of the experience
      console.log("END EXPERIENCE");
    }
  }

  // REMOVE AFTER TESTING
  useEffect(() => {
    console.log("Active360VideoIndex: ", active360VideoIndex);
  }, [active360VideoIndex]);

  // 360 Video State
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.setAttribute("playsinline", "true");
    vid.crossOrigin = "Anonymous";
    return vid;
  });

  // Set 360 video attributes on video change
  useEffect(() => {
    video.src = active360Video;
    video.playbackRate = 4.0;
    video.addEventListener("ended", next360Video);
    video.loop = false;
    video.muted = true;
    video.play();
  }, [active360Video]);

  // Checks to occur every second
  function appTick() {
    if (!video.paused) {
      setCount(count + 1);
    }
    // Activate modals half way through videos
    switch (active360VideoIndex) {
      case 0:
        if (count === Math.ceil(video.duration / 8)) {
          setActiveModal(2);
          pause360Video();
        }
        break;
      case 1:
        if (count === Math.ceil(video.duration / 8)) {
          setActiveModal(3);
          pause360Video();
        }
        break;
      case 2:
        if (count === Math.ceil(video.duration / 8)) {
          setActiveModal(4);
          pause360Video();
        }
        break;
    }
  }

  return (
    <>
      <ThreeCanvas video={video} />
      {activeModal === 1 && <Modal1 continue360Video={continue360Video} />}
      {activeModal === 2 && (
        <VideoModal
          continue360Video={continue360Video}
          videoSrc={videoModal1}
        />
      )}
      {activeModal === 3 && (
        <VideoModal
          continue360Video={continue360Video}
          videoSrc={videoModal2}
        />
      )}
      {activeModal === 4 && (
        <VideoModal
          continue360Video={continue360Video}
          videoSrc={videoModal3}
        />
      )}
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
    </>
  );
}
