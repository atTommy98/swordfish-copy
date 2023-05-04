// ThreeJS
import { Canvas } from "react-three-fiber";
import { CameraControls, DeviceOrientationControls } from "@react-three/drei";
import Sphere from "./Sphere";

interface IThreeCanvasProps {
   isCameraControls: boolean,
   videoSrc: string
}

export default function ThreeCanvas({isCameraControls, videoSrc}: IThreeCanvasProps) {
  return (
    <Canvas camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 0, 0.1] }}>
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
  );
}
