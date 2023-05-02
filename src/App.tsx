import "./App.css";

import Sphere from "./components/Sphere";

import { Canvas } from "react-three-fiber";
import { CameraControls, DeviceOrientationControls } from "@react-three/drei";
import { useState } from "react";

function App() {
  const [isCameraControls, setIsCameraControls] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsCameraControls(!isCameraControls)} style={{ position: "absolute", top: "30px", left: "15px", zIndex: 5 }}>{isCameraControls ? "Camera Controlled" : "Device Controlled"}</button>
      <div className="canvas">
        <Canvas
          camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 0, 0.1] }}
        >
          {isCameraControls ? (
            <CameraControls />
          ) : (
            <DeviceOrientationControls />
          )}
          <Sphere />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
