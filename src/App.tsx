import "./index.css";
import url from "./videos/mountain-pass.mp4";
import {useState} from "react"

// Components
import ThreeCanvas from "./components/ThreeCanvas";
import Accelerometer from "./components/Accelerometer";

function App() {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.setAttribute('playsinline', "true")
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  // video.play()

  return (
    <div className="App">
      <ThreeCanvas url={video} />
      <Accelerometer />
    </div>
  );
}

export default App;