import "./App.css";
import { useState } from "react";

// ThreeJS
import { Canvas } from "react-three-fiber";
import { CameraControls, DeviceOrientationControls } from "@react-three/drei";
import Sphere from "./components/Sphere";

// QR
import { QrReader } from "react-qr-reader";

// Navigation
import { useNavigate } from "react-router-dom";

function App({ videoSrc }: IVideoProps) {
  const [isCameraControls, setIsCameraControls] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="App">
      <button
        className="button"
        onClick={() => setIsCameraControls(!isCameraControls)}
      >
        {isCameraControls ? "Camera Controlled" : "Device Controlled"}
      </button>
      <QrReader
        className="qr-reader"
        onResult={(res: any, err: any): void => {
          if (res) {
            navigate(`/${res.text}`, { replace: true });
            console.log(res);
          }
        }}
      />
      <div className="canvas">
        <Canvas
          camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 0, 0.1] }}
        >
          {isCameraControls ? (
            <CameraControls />
          ) : (
            <DeviceOrientationControls
              addEventListener={undefined}
              removeEventListener={undefined}
              hasEventListener={undefined}
              dispatchEvent={undefined}
            />
          )}
          <Sphere videoSrc={videoSrc} />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
